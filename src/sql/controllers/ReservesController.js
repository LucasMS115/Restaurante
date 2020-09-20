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

  async searchById(req, res){

    if(!req.body.id) return res.status(400).json({ error: "No id received for the search"});
    const id = req.body;
    const reserves = await Reserves.findOne({ where: id});
    if(!reserves) return res.json({ error: `We dont have a reserve to this ID (${id.id}).` });
    return res.json(reserves);
    
  }

  async searchByDay(req, res){

    if(!req.body.day) return res.status(400).json({ error: "No day received for the search"});
    const day = req.body;
    const reserves = await Reserves.findAll({ where: day});
    if(!reserves[0]) return res.json({ error: `We dont have a reserve to this DAY (${day.day}).` });
    return res.json(reserves);
    
  }

  async searchByRoom(req, res){

    if(!req.body.room) return res.status(400).json({ error: "No room received for the search"});
    const room = req.body;
    const reserves = await Reserves.findAll({ where: room});
    if(!reserves[0]) return res.json({ error: `We dont have a reserve to this ROOM (${room.room}).` });
    return res.json(reserves);
    
  }

  async searchByUser(req, res){

    if(!req.body.user_id) return res.status(400).json({ error: "No user_id received for the search"});
    const user_id = req.body;
    const reserves = await Reserves.findAll({ where: user_id});
    if(!reserves[0]) return res.json({ error: `We dont have a reserve to this user_id (${user_id.user_id}).` });
    return res.json(reserves);
    
  }

  async update(req, res) {
    const {id} = req.params;
    let reserve = await Reserves.findByPk(id);
    const newValues = req.body;

    if(!reserve) return res.status(400).json({ error: "Reserve not found"});
    
    await reserve.update({
      hour: newValues.hour,
      day: newValues.day,
      room: newValues.room,
      people: newValues.people,
    })
    .catch((error) => res.status(400).json(error));
      
    reserve = await Reserves.findByPk(id);

    return res.json(reserve);
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