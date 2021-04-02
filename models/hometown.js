'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hometown extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.hometown.hasMany(models.author)
      // define association here
    }
  };
  hometown.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hometown',
  });
  return hometown;
};