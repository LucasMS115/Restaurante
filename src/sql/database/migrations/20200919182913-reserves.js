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
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cel: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      hour: {
        type: Sequelize.TIME,
        allowNull: false
      },
      day: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      room: {
        type: Sequelize.STRING,
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
