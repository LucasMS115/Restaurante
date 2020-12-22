const User = require('../models/User');  
const Reserves = require('../models/Reserves');
const Sequelize = require('sequelize');
const {QueryTypes} = require('sequelize');
const databaseConfig = require('../../config/database');
const max = 4; //max reserves to each hour
const sequelize = new Sequelize(databaseConfig);

class ReservesController {

  async store(req, res) {
    const {user_id} = req.params;
    const {name, cel, email, hour, day, room, people} = req.body;
    const user = await User.findByPk(user_id);
    const freeHours = await new ReservesController().freeHours({day: day});
    if(!user){
      return res.status(400).json({ error: 'User not found' })
    }else if(!freeHours.includes(hour)){
      return res.status(400).json({ error: 'Reached max limit to this date'})
    }else{
      const reserve = await Reserves.create({user_id, name, cel, email, hour, day, room, people});
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

  async freeHours(req, res){

    //get reserves 
    let day;
    if(req.body !== undefined)day = req.body; 
    else day = req; // if the function was called in other function here
    if(!day) return res.status(400).json({ error: "No day received for the search"});
    const reserves = await Reserves.findAll({ where: day });

    const hours = ["11:00:00", "12:00:00","13:00:00","14:00:00", "19:00:00", "20:00:00", "21:00:00", "22:00:00"];
    let counters = [0,0,0,0,0,0,0,0];
    let freeHours = []; 
    
    // counting
    reserves.forEach( (el) => {
      for(let i = 0; i < hours.length; i++){
        if(el.hour == hours[i]) counters[i] = counters[i]+1;
      }
    });

    // push the free hours to freeHours
    for(let i = 0; i < hours.length; i++){
      if(counters[i] < max) {
        freeHours.push(hours[i]);
      };
    }

    if(!req.body) return freeHours; // if the function was called in other function here
    return res.json(freeHours);
    
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
    const freeHours = await new ReservesController().freeHours({day: newValues.day});

    if(!reserve) return res.status(400).json({ error: "Reserve not found"});
    if(!freeHours.includes(newValues.hour)) return res.status(400).json({ error: 'Reached max limit to this date'});
    
    await reserve.update({
      name: newValues.name,
      cel: newValues.cel,
      email:newValues.email,
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