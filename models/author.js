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
      models.author.belongsToMany(models.subject, {
        through: 'book'
      })
      models.author.hasMany(models.book)
      //someAuthor.getHometown(someHometown)
      //someAuthor.getSubject(someSubject)
      //someAuthor.addSubject(someSubject)
      //someBook.setAuthor(someAuthor)
    }
  };
  author.init({
    name: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    age: {
      type: DataTypes.INTEGER, allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        isNumeric: true,
        min: 18
      }
    },
    sex: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        isIn: ['M', 'F', 'Other']
      }
    },
    email: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        isEmail: true
      }
    },
    website: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
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