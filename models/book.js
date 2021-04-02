'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.book.belongsTo(models.subject)
      models.book.belongsTo(models.author)
      //someBook.getSubject(someSubject)
      //someBook.getAuthor(someAuthor)
    }
  };
  book.init({
    title: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    subjectId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};