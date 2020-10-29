const Sequelize = require('sequelize');

class Dish extends Sequelize.Model {
  //Default sequelize method, receive the connection to sequelize
  static init(sequelize){
    //The model class have a init method, here we call it
    super.init(
      //1st, Colums that aren't assigned automatically
      {
        name: Sequelize.STRING,
        price: Sequelize.STRING,
        type: Sequelize.STRING,
        description: Sequelize.STRING,        
        active: Sequelize.BOOLEAN
      },
      //2nd, the connection 
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models){
    this.hasOne(models.Images, { 
      foreignKey: 'dishId', 
      as: 'imageDetails', 
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }); // 1:1
  };
  
}

module.exports = Dish;