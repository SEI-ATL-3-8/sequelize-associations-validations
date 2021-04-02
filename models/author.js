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
      models.author.belongsTo(models.hometown);
      models.author.hasMany(models.book);
    }
  };
  author.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
    ,
    age: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        min: 0
      }  
    }
      ,    
    sex:  {
      type: DataTypes.STRING,
      validate: {
        isIn: [['M','F']]
      }
    },
    email:  {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    website:  {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    hometownId: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'author',
  });
  return author;
};