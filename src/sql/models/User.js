const Sequelize = require('sequelize');

class User extends Sequelize.Model {
  //Default sequelize method, receive the connection to sequelize
  static init(sequelize){
    //The model class have a init method, here we call it
    super.init(
      //1st, Colums that aren't assigned automatically
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        cel: Sequelize.STRING,        
        password: Sequelize.STRING
      },
      //2nd, the connection 
      {
        sequelize
      }
    );

    return this;
  }

  //Defining the relationship
  static associate(models){
    this.hasMany(models.Reserves, { foreignKey: 'user_id', as: 'reserves'}); //1-N
  };
  
}

module.exports = User;