'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('student_details', [{
        id: 1,
        name: "Some student",
        email: "something@gmailc.cpo",
        phone: "4989898989",
        dob: "2022-01-17",
        identification_mark: "cut mark in right hand",
        blood_group: "O+ve",
        createdAt: '2022-07-29 03:56:55',
        updatedAt: '2022-07-29 03:56:55'
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
