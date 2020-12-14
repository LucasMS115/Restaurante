const Dishes = require('../models/Dishes');
const Images = require('../models/Images');
const ImagesController = require('./ImagesController');
  
class DishesController {
  async store(req, res) {
    try {
      const dish = await Dishes.create(req.body);
      return res.json(dish);
    }catch(error){
      console.log("AT DISH CONTROLLER - STORE:\n" + error)
      return res.json({ error: error.name});
    }
  }

  async index(req, res){
    const dishes = await Dishes.findAll();
    return res.json(dishes);
  }

  async searchById(req, res){
  
    if(!req.body.id) return res.status(400).json({ error: "No id received for the search"});
    const id = req.body;
    const dishes = await Dishes.findOne({ where: id});
    if(!dishes) return res.json({ error: `We dont have a dish to this ID (${id.id}).` });
    return res.json(dishes);
    
  }

  async searchByName(req, res){

    if(!req.body.name) return res.status(400).json({ error: "No name received for the search"});
    const name = req.body;
    const dishes = await Dishes.findAll({ where: name});
    if(!dishes[0]) return res.json({ error: `We dont have a dish to this NAME (${name.name}).` });
    return res.json(dishes);
    
  }

  async searchByType(req, res){

    if(!req.body.type) return res.status(400).json({ error: "No type received for the search"});
    const type = req.body;
    const dishes = await Dishes.findAll({ where: type});
    if(!dishes[0]) return res.json({ error: `We dont have a dish to this NAME (${type.type}).` });
    return res.json(dishes);
    
  }

  async update(req, res) {
    const {id} = req.params;
    let dish = await Dishes.findByPk(id);
    const newValues = req.body;

    if(!dish) return res.status(400).json({ error: "Dish not found"});
    
    await dish.update({
      name: newValues.name,
      price: newValues.price,
      type: newValues.type,
      description: newValues.description,
      active: newValues.active
    })
    .catch((error) => res.status(400).json(error));
      
    dish = await Dishes.findByPk(id);

    return res.json(dish);
  }

  async delete(req, res) {

    const {id} = req.params;
    console.log(id);
    const dish = await Dishes.findByPk(id);
    const img = await Images.findOne({where: {dish_id: id}});
    
    try {

      if(img){
        console.log("Removing img from storage - Start");
        await ImagesController.delete({dish_id: id, fd: true}, res);
        console.log("Removing img from storage - Complete");
      } 
      else console.log("No img associated");
  
      if(!dish){
        return res.status(400).json({ error: 'Dish not found' });
      }else{
        console.log("Removing dish and img from database - Start");
        await dish.destroy();
        console.log("Removing dish and img from database - Complete");
        return res.json({status: "complete"});
      };

    } catch (error) {
      console.log("\nOn delete dish process \n");
      console.log(error);
      console.log("\nOn delete dish process \n");
    }
    
  };
  
};

module.exports = new DishesController();