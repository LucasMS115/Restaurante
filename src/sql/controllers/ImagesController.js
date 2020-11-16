const path = require('path');
var fs = require('fs');
const Images = require('../models/Images');
const Dishes = require('../models/Dishes');

class ImagesController {

  async store(req, res) {

    const url = `${process.env.APP_URL}/${req.file.filename}`;
    const dishId = req.params.id;
    
    // ### if the dish received already has an image, cancel the store by deleting the file
    const img = await Images.findOne({ where: {dish_id: dishId}});  
    if(img){

      const key = req.file.filename;

      try{
        await fs.unlink(path.resolve(__dirname, "..", "..", "..", "uploads", key) ,function(err){
          if(err){
            console.log("Error while deleting the file" + err);
          }
        });
      }catch(err){
        console.log(`Error deleting file /n${err}`)
      }

      return res.status(400).json({ error: 'This dish already have an image' });
    } 
    //###

    const dish = await Dishes.findByPk(dishId);
    if(!dish){

      return res.status(400).json({ error: 'Dish not found' });

    }else{

      const body = {
        dishId: dishId,
        key: req.file.filename,
        url: url,
        name: req.file.originalname,
        size: req.file.size 
      }
  
      try {
        const img = await Images.create(body);
        return res.json(img);
      }catch(error){
        console.log("AT IMG CONTROLLER - STORE:\n" + error)
        return res.json({ error: error.name});
      }

    }

  }

  async index(req, res){
    const img = await Images.findAll();
    return res.json(img);
  }

  async searchById(req, res){
  
    if(!req.body.id) return res.status(400).json({ error: "No id received for the search"});
    const id = req.body;
    const img = await Images.findOne({ where: id});
    if(!img) return res.json({ error: `We dont have a image to this ID (${id.id}).` });
    return res.json(img);
    
  }

  async searchByDishId(req, res){
  
    if(!req.body.dish_id) return res.status(400).json({ error: "No id received for the search"});
    const dish_id = req.body;
    const img = await Images.findOne({ where: dish_id});
    if(!img) return res.json({ error: `We dont have a image to this ID (${dish_id.dish_id}).` });
    return res.json(img);
    
  }

  async searchByKey(req, res){
  
    if(!req.body.key) return res.status(400).json({ error: "No key received for the search"});
    const key = req.body;
    const img = await Images.findOne({ where: key});
    if(!img) return res.json({ error: `We dont have a image to this KEY (${key.key}).` });
    return res.json(img);
    
  }

  async searchByName(req, res){

    if(!req.body.name) return res.status(400).json({ error: "No name received for the search"});
    const name = req.body;
    const img = await Images.findAll({ where: name});
    if(!img[0]) return res.json({ error: `We dont have a image to this NAME (${name.name}).` });
    return res.json(img);
    
  }

  async delete(req, res) {

    //when the function is called by dishes delete, req.body = undefined 
    let body;
    if(req.body !== null && req.body !== undefined) body = req.body;
    else body = req;

    const {fd} = body; // from dishes, when true, req is comming from the dishes table delete
    const {dish_id} = body;
    const img = await Images.findOne({where: {dish_id: dish_id}});
    
    if(!img){
      return res.status(400).json({ error: 'Image not found' });
    }else{

      const key = img.dataValues.key;

      try{
        //delete image file
        await fs.unlink(path.resolve(__dirname, "..", "..", "..", "uploads", key) ,function(err){
          if(err){
            console.log("Error while deleting the file" + err);
          }
        });
      }catch(err){
        console.log("\n###\n" + path.resolve(__dirname, "..", "..", "uploads", key) + "\n###\n")
        console.log(`Error deleting file /n${err}`)
      }

      //remove row from table Images
      if(!fd){
        await img.destroy();
        return res.json({ res: `!fd Img delete -> done ` });
      }

      return;
    };
  };  
  
};

module.exports = new ImagesController();