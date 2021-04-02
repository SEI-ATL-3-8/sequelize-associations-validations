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
      models.author.hasMany(models.book)
      models.author.belongsToMany(models.subject, {through: 'book'})
    }
  };
  author.init({
    name: {type:DataTypes.STRING, allowNull:false,
      validate: {
        notNull:true,
        notEmpty: true
      }
    }, 
    age: {type:DataTypes.INTEGER, allowNull:false,
      validate: {
        isNumeric: true,
        min: 0
      }
    },    
    sex: {type:DataTypes.INTEGER, allowNull:false,
      validate: {
        isIn: [['F', 'M']]
      }
    },    
    email: {type:DataTypes.INTEGER, allowNull:false,
      validate: {
        isEmail: true
      }
    },  
    website: {type:DataTypes.INTEGER, allowNull:false,
      validate: {
        isUrl: true
      }
    }, 
    hometownId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'author',
  });
  return author;
};