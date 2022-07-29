'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FeeStructures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      std: {
        type: Sequelize.STRING
      },
      admission: {
        type: Sequelize.INTEGER
      },
      monthly: {
        type: Sequelize.INTEGER
      },
      identity: {
        type: Sequelize.INTEGER
      },
      sports: {
        type: Sequelize.INTEGER
      },
      transport: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('FeeStructures');
  }
};