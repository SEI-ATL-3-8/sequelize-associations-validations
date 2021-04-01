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
    await models.subject.bulkCreate([
      { name: 'Business' },
      { name: 'Childrens Books' },
      { name: 'Classics' },
      { name: 'Computers' },
      { name: 'Cooking' },
      { name: 'Drama' },
      { name: 'Entertainment' },
      { name: 'History' },
      { name: 'Horror' },
      { name: 'Mystery' },
      { name: 'Poetry' },
      { name: 'Religion' },
      { name: 'Romance' },
      { name: 'Science' },
      { name: 'Science Fiction' },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await models.subject.destroy({ where: {} } )
  }
};
