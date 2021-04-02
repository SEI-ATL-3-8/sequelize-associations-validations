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
      // define association here
      models.author.belongsTo(models.hometown)
      models.author.belongsToMany(models.subject, {through: 'book'})
      models.author.hasMany(models.book)
    }
  };
  author.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },  
    age: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true
      }
    },    
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