'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.subject.hasMany(models.book)
      // models.subject.hasMany(models.author)
      models.subject.belongsToMany(models.author, {
        through: 'book'
      })
      //someSubject.getAuthors
      //someSubject.addAuthors(someAuthor)
    }
  };
  subject.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'subject',
  });
  return subject;
};