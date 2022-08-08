'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('school_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      school_name: {
        type: Sequelize.STRING
      },
      est_date: {
        type: Sequelize.STRING
      },
      medium: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('school_details');
  }
};