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
      models.author.hasMany(models.book)
      models.author.belongsToMany(models.subject, {
        through: 'book'
      })
    }
  };

  author.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:true
      }},

    age: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        min:0
      }},

    sex: {
      types: DataTypes.STRING,
      validate: {
        isIn: [['M', 'F']]
      }},

    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }},
    website: {
      type: DataTypes.STRING,
      validate: {
        isUrl:true
      }},

    hometownId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'author',
  });

  return author;
};
