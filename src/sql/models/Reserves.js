const Sequelize = require('sequelize');

class Reserves extends Sequelize.Model {
  //Default sequelize method, receive the connection to sequelize
  static init(sequelize){
    //The model class have a init method, here we call it
    super.init(
      //1st, Colums that aren't assigned automatically
      {
        name: Sequelize.STRING,
        cel: Sequelize.STRING,
        email: Sequelize.STRING,
        hour: Sequelize.TIME,        
        day: Sequelize.DATEONLY,
        room: Sequelize.INTEGER,
        people: Sequelize.INTEGER
      },
      //2nd, the connection 
      {
        sequelize
      }
    );

    return this;
  };

  //Defining the relationship
  static associate(models){
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'}); //1-N
  };
}

module.exports = Reserves;