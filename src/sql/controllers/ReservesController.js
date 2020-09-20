const User = require('../models/User');  
const Reserves = require('../models/Reserves');

class ReservesController {
  async store(req, res) {
    const {user_id} = req.params;
    const {hour, day, room, people} = req.body;

    const user = await User.findByPk(user_id);
    if(!user){
      return res.status(400).json({ error: 'User not found' })
    }else{
      const reserve = await Reserves.create({user_id, hour, day, room, people});
      return res.json(reserve);
    }

  }

  async index(req, res){
    const reserves = await Reserves.findAll();
    return res.json(reserves);
  }

  async delete(req, res) {

    const {id} = req.body;
    const reserve = await Reserves.findByPk(id);

    if(!reserve){
      return res.status(400).json({ error: 'Reserve not found' });
    }else{
      await reserve.destroy();
      return res.json();
    };
    
  };  
  
}

module.exports = new ReservesController();