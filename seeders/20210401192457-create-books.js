'use strict';

const models = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     
        
    let a = await models.author.findOne({ where: { name: 'Stephen King' }})
    let s = await models.subject.findOne({ where: { name:  'Horror' } })
    await models.book.create({
      authorId: a.id,
      subjectId: s.id,
      title: 'The Shining'
    })
         
    a = await models.author.findOne({ where: { name: 'Frank Herbert' }})
    s = await models.subject.findOne({ where: { name:  'Science Fiction' } })
    await models.book.create({
      authorId: a.id,
      subjectId: s.id,
      title: 'Dune'
    })

    a = await models.author.findOne({ where: { name:  'Arthur C. Clarke'}}) 
    s = await models.subject.findOne({ where: { name:  'Science Fiction' } })
    await models.book.create({
      authorId: a.id,
      subjectId: s.id,
      title: '2001: A Space Odyssey'
    })

    a = await models.author.findOne({ where: { name: 'Paulette Bourgeois' }})
     s = await models.subject.findOne({ where: { name:  'Childrens Books' } })
     await models.book.create({
       authorId: a.id,
       subjectId: s.id,
       title: 'Franklin in the Dark'
     })

     a = await models.author.findOne({ where: { name: 'Margaret Wise Brown' }})
     s = await models.subject.findOne({ where: { name:  'Childrens Books' } })
     await models.book.create({
       authorId: a.id,
       subjectId: s.id,
       title: 'Goodnight Moon'
     })

     a = await models.author.findOne({ where: { name: 'Louisa May Alcott' }})
     s = await models.subject.findOne({ where: { name:  'Drama' } })
     await models.book.create({
       authorId: a.id,
       subjectId: s.id,
       title: 'Little Women'
     })

     a = await models.author.findOne({ where: { name: 'Margery Williams Bianco' }})
     s = await models.subject.findOne({ where: { name:  'Classics' } })
     await models.book.create({
       authorId: a.id,
       subjectId: s.id,
       title: 'The Velveteen Rabbit'
     })

     a = await models.author.findOne({ where: { name: 'Mark Lutz' }})
     s = await models.subject.findOne({ where: { name:  'Computers' } })
     await models.book.create({
       authorId: a.id,
       subjectId: s.id,
       title: 'Programming Python'
     })

     a = await models.author.findOne({ where: { name: 'Mark Lutz' }})
     s = await models.subject.findOne({ where: { name:  'Computers' } })
     await models.book.create({
       authorId: a.id,
       subjectId: s.id,
       title: 'Learning Python'
     })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    models.book.destroy({ where: {} })
  }
};
