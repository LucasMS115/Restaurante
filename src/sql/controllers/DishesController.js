  
const Dish = require('../models/Dishes');



class DishesController {
  async store(req, res) {
    try {
      const dish = await Dish.create(req.body);
      return res.json(dish);
    }catch(error){
      console.log("AT DISH CONTROLLER - STORE:\n" + error.name)
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
    if(!dishes) return res.json({ error: `We dont have a user to this ID (${id.id}).` });
    return res.json(dishes);
    
  }

  async searchByName(req, res){

    if(!req.body.name) return res.status(400).json({ error: "No name received for the search"});
    const name = req.body;
    const dishes = await Dishes.findAll({ where: name});
    if(!dishes[0]) return res.json({ error: `We dont have a dish to this NAME (${name.name}).` });
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
      description: newValues.description,
      active: newValues.active,
      image: newValues.image,
    })
    .catch((error) => res.status(400).json(error));
      
    dish = await Dishes.findByPk(id);

    return res.json(dish);
  }

  async delete(req, res) {

    const {id} = req.body;
    const dish = await Dish.findByPk(id);

    if(!dish){
      return res.status(400).json({ error: 'Dish not found' });
    }else{
      await dish.destroy();
      return res.json();
    };
  };
  
};

module.exports = new DishesController();