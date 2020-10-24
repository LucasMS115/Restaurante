  
const Images = require('../models/Images');

class ImagesController {

  async store(req, res) {

    const body = {
      key: req.file.filename,
      url: req.file.path,
      name: req.file.originalname,
      size: req.file.size 
    }

    try {
      const img = await Images.create(body);
      console.log(img);
      return res.json(img);
    }catch(error){
      console.log("AT IMG CONTROLLER - STORE:\n" + error)
      return res.json({ error: error.name});
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

    const {id} = req.body;
    const img = await Images.findByPk(id);

    if(!img){
      return res.status(400).json({ error: 'Image not found' });
    }else{
      await img.destroy();
      return res.json({status: "completed"});
    };
  };  
  
};

module.exports = new ImagesController();