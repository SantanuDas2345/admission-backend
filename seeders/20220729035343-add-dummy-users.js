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
     await queryInterface.bulkInsert('users',
     [
      {
        "id": 1,
        "username": "santanu",
        "password": "admin",
        "phone": "9509898978",
        "status": true,
        "email": "santanu@santanu.com",
        "role": "user",
        "createdAt": '2022-07-29 03:56:55',
        "updatedAt": '2022-07-29 03:56:55'
      },
      {
        "id": 2,
        "username": "biswajit",
        "password": "admin",
        "phone": "9509898978",
        "status": true,
        "email": "biswajit@biswajit.com",
        "role": "user",
        "createdAt": '2022-07-29 03:56:55',
        "updatedAt": '2022-07-29 03:56:55'
      },
      {
        "id": 3,
        "username": "admin",
        "password": "admin",
        "phone": "9509898978",
        "status": true,
        "email": "admin@amin.com",
        "role": "user",
        "createdAt": '2022-07-29 03:56:55',
        "updatedAt": '2022-07-29 03:56:55'
      }
    ] , {});
     },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('users', null, {});
  }
};
