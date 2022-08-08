'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('parents_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      p_id: {
        type: Sequelize.STRING
      },
      student_id: {
        type: Sequelize.STRING
      },
      father_name: {
        type: Sequelize.STRING
      },
      mother_name: {
        type: Sequelize.STRING
      },
      father_occupation: {
        type: Sequelize.STRING
      },
      mother_occupation: {
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
    await queryInterface.dropTable('parents_details');
  }
};