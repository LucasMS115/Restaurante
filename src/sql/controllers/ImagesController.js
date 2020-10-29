require('dotenv').config();
const path = require('path');
var fs = require('fs');
const Images = require('../models/Images');
const Dishes = require('../models/Dishes');

class ImagesController {

  async store(req, res) {

    const url = `${process.env.APP_URL}/${req.file.filename}`;
    const dishId = req.params.id;

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

    const dish_id = req.body;
    const img = await Images.findOne({where: dish_id});
    const key = img.dataValues.key;

    if(!img){
      return res.status(400).json({ error: 'Image not found' });
    }else{

      try{
        await fs.unlink(path.resolve(__dirname, "..", "..", "..", "temp", "uploads", key) ,function(err){
          if(err){
            console.log("Error while deleting the file" + err);
          }
        });
      }catch(err){
        console.log("\n###\n" + path.resolve(__dirname, "..", "..", "temp", "uploads", key) + "\n###\n")
        console.log(`Error deleting file /n${err}`)
      }

      //await img.destroy();
      return;
    };
  };  
  
};

module.exports = new ImagesController();