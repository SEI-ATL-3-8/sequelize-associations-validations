'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.author.belongsTo(models.hometown)

      models.author.belongsToMany(models.subject, { through: 'book'})
    }
  };
  author.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,    
    sex: DataTypes.STRING,
    email: DataTypes.STRING,
    website: DataTypes.STRING,
    hometownId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'author',
  });
  return author;
};