const Sequelize = require('sequelize');

class Images extends Sequelize.Model {
  //Default sequelize method, receive the connection to sequelize
  static init(sequelize){
    //The model class have a init method, here we call it
    super.init(
      //1st, Colums that aren't assigned automatically
      {
        key: Sequelize.STRING,
        url: Sequelize.STRING,
        name: Sequelize.STRING,
        size: Sequelize.DOUBLE       
      },
      //2nd, the connection 
      {
        sequelize
      }
    );

    return this;
  }
  
}

module.exports = Images;