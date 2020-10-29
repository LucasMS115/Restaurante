const Sequelize = require('sequelize');

/*** IMPORTING MODELS ***/
const User = require('../models/User');
const Reserves = require('../models/Reserves');
const Dishes = require('../models/Dishes');
const Images = require('../models/Images');
/*** IMPORTING MODELS ***/

const databaseConfig = require('../../config/database');

//Models array
const models = [User, Reserves, Dishes, Images];

class Database {
  constructor() {
    this.init();
  }

  init(){

    this.connection = new Sequelize(databaseConfig);

    //Initializing all the modules in the array
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))

  }
}

module.exports = new Database();