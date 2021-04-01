'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addColumn('authors', 'hometownId', { type: Sequelize.DataTypes.INTEGER })
    queryInterface.addColumn('books', 'authorId', { type: Sequelize.DataTypes.INTEGER })
    queryInterface.addColumn('books', 'subjectId', { type: Sequelize.DataTypes.INTEGER })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
