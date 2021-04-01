'use strict';

const models = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await models.hometown.bulkCreate([
      { name: 'Portland, Maine' },
      { name: 'Tacoma, Washington' },
      { name: 'Somerset, England' },
      { name: 'Winnipeg, Manitoba' },
      { name: 'Brooklyn, New York' },
      { name: 'Philadelphia, Pennsylvania' },
      { name: 'London, England' },
      { name: 'Chicago, Illinois' },
      { name: 'Minneapolis, Minnesota' },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await models.hometown.destroy({ where: {} })
  }
};
