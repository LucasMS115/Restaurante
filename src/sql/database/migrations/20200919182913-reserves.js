'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('reserves', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id'},
        //in case of a modification in the referenced id
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      hour: {
        type: Sequelize.TIME,
        allowNull: false
      },
      day: {
        type: Sequelize.STRING,
        allowNull: false
      },
      room: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      people: {
        type: Sequelize.INTEGER,
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

    await queryInterface.dropTable('reserves');

  }
};
