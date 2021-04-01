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
   await models.author.bulkCreate([
    { name: 'Stephen King' },
    { name: 'Frank Herbert' },
    { name: 'Arthur C. Clarke' },
    { name: 'Paulette Bourgeois' },
    { name: 'Margaret Wise Brown' },
    { name: 'Louisa May Alcott' },
    { name: 'Margery Williams Bianco' },
    { name: 'Burne Hogarth' },
    { name: 'Mark Lutz' },
    { name: 'Gwendolyn Brooks' },
    { name: 'Shel Silverstein' },
    { name: 'Carl Sandburg' },
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    models.author.destroy({ where: {} })
  }
};
