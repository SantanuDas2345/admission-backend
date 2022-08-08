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
     await queryInterface.bulkInsert('parents-details', [{
        father_name: 'xyz',
        mother_name: 'abc',
        father_occupation: 'business',
        mother_occupation: 'housewife',
        phone:'3692934898',
        email: 'parents@example.com'

        //isBetaMember: false
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
