  
const User = require('../models/User');

class UserController {
  async store(req, res) {
    const user = await User.create(req.body);
    return res.json(user);
  }

  async index(req, res){
    const users = await User.findAll();
    return res.json(users);
  }

  async delete(req, res) {

    const {id} = req.body;
    console.log(id + " <- ID")
    const user = await User.findByPk(id);

    if(!user){
      return res.status(400).json({ error: 'User not found' });
    }else{
      console.log("3")
      await user.destroy();
      console.log("4")
      return res.json();
    };
  };  
  
};

module.exports = new UserController();