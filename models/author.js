'use strict';
const {
  Model
} = require('sequelize');
const subject = require('./subject');
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
      models.author.hasMany(models.book)
      models.author.belongsToMany(models.subject, {through: 'book'})
    }
  };
  author.init({
    name: {
      type: DataTypes.STRING, allowNull:false,
      validate: {
        notEmpty: true
      }
    },
    age: {
      type: DataTypes.INTEGER, allowNull:false,
    validate: {
      isNumeric: true,
      min: 18,
      max: 110
    }
  },
    sex: {
      type: DataTypes.STRING, allowNull:false,
      validate: {
        isIn: [["M", "F", "m", "f"]]
      }
    },
    email: {
      type: DataTypes.STRING, allowNull:false,
      validate: {
        isEmail:true
      }
    },
    website: {
      type: DataTypes.STRING, allowNull:false,
      validate: {
        isUrl:true
      }
    },
    hometownId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'author',
  });
  return author;
};