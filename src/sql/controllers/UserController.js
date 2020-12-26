  
const User = require('../models/User');

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      return res.json(user);
    }catch(error){
      console.log("AT USER CONTROLLER - STORE:\n" + error.name)
      return res.json({ error: error.name});
    }
  }

  async index(req, res){
    console.log(process.env.DATABASE_URL);
    const users = await User.findAll();
    return res.json(users);
  }

  async searchById(req, res){
  
    if(!req.params.id) return res.status(400).json({ error: "No id received for the search"});
    const id = req.params;
    const user = await User.findOne({ where: id});
    if(!user) return res.json({ error: `We dont have a user to this ID (${id}).` });
    return res.json(user);
    
  }

  async searchByEmail(req, res){

    if(!req.body.email) return res.status(400).json({ error: "No email received for the search"});
    const email = req.body;
    const users = await User.findOne({ where: email});
    if(!users) return res.json({ error: `We dont have a user to this EMAIL (${email.email}).` });
    return res.json(users);
    
  }

  async testUser(req, res){

    if(!req.params.email) return res.status(400).json({ error: "No email received for the search"});
    const {email} = req.params;
    const user = await User.findOne({ where: {email}});

    if(!user) return res.json({ error: `We dont have a user to this EMAIL (${email}).` });

    const {password} = req.params;

    if(user.password === password) return res.json(user.id);
    return res.json({ error: `Invalid Password` });
    
  }

  async searchByName(req, res){

    if(!req.body.name) return res.status(400).json({ error: "No name received for the search"});
    const name = req.body;
    const users = await User.findAll({ where: name});
    if(!users[0]) return res.json({ error: `We dont have a user to this NAME (${name.name}).` });
    return res.json(users);
    
  }

  async update(req, res) {
    const {id} = req.params;
    let user = await User.findByPk(id);
    const newValues = req.body;

    if(!user) return res.status(400).json({ error: "User not found"});
    
    await user.update({
      name: newValues.name,
      email: newValues.email,
      cel: newValues.cel,
      password: newValues.password,
    })
    .catch((error) => res.status(400).json(error));
      
    user = await User.findByPk(id);

    return res.json(user);
  }

  async delete(req, res) {

    const {id} = req.params;
    console.log(id + " <- ID")
    const user = await User.findByPk(id);

    if(!user){
      return res.status(400).json({ error: 'User not found' });
    }else{
      await user.destroy();
      return res.json({Status: "complete"});
    };
  };  
  
};

module.exports = new UserController();