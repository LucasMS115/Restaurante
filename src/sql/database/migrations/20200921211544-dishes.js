'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('dishes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type:{
        type: Sequelize.STRING,
        allowNull: false
      },
      description:{
        type: Sequelize.STRING,
        allowNull: false
      },
      active:{
        type: Sequelize.BOOLEAN, 
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('dishes');

  }
};
