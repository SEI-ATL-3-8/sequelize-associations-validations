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
    // name: DataTypes.STRING,
    name: {
      type:DataTypes.STRING, allowNull:false,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    },    
    // age: DataTypes.INTEGER,
    age: {
      type:DataTypes.INTEGER, allowNull:false,
      validate:{
        isNumeric: true,
        min: 0
      }
    },
    // sex: DataTypes.STRING,
    sex: {
      type:DataTypes.STRING, allowNull:false,
      validate: {
        isIm: ['M', 'F']
      }
    },
    // email: DataTypes.STRING,
    email: {
      type:DataTypes.INTEGER, allowNull:false,
      validate:{
        isEmail: true
      }
    },
    website: DataTypes.STRING,
    hometownId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'author',
  });
  return author;
};