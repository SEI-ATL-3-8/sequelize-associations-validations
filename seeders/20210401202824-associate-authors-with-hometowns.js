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
    const sk = await models.author.findOne({ where: { name: 'Stephen King' } })
    const skTown = await models.hometown.findOne({ where: { name: 'Portland, Maine'} })
    await sk.update({ hometownId: skTown.id })
      
    const fh = await models.author.findOne({ where: { name: 'Frank Herbert' } })
    const fhTown = await models.hometown.findOne({ where: { name: 'Tacoma, Washington'} })
    await fh.update({ hometownId: fhTown.id })
    
    const ac = await models.author.findOne({ where: { name: 'Arthur C. Clarke' } })
    const acTown = await models.hometown.findOne({ where: { name: 'Somerset, England'} })
    await ac.update({ hometownId: acTown.id })
    
    const pb = await models.author.findOne({ where: { name: 'Paulette Bourgeois' } })
    const pbTown = await models.hometown.findOne({ where: { name: 'Winnipeg, Manitoba'} })
    await pb.update({ hometownId: pbTown.id })
    
    const mb = await models.author.findOne({ where: { name: 'Margaret Wise Brown' } })
    const mbTown = await models.hometown.findOne({ where: { name: 'Brooklyn, New York'} })
    await mb.update({ hometownId: mbTown.id })
    
    const lma = await models.author.findOne({ where: { name: 'Louisa May Alcott' } })
    const lmaTown = await models.hometown.findOne({ where: { name: 'Philadelphia, Pennsylvania'} })
    await lma.update({ hometownId: lmaTown.id })
    
    const mwb = await models.author.findOne({ where: { name: 'Margery Williams Bianco' } })
    const mwbTown = await models.hometown.findOne({ where: { name: 'London, England'} })
    await mwb.update({ hometownId: mwbTown.id })
    
    const bh = await models.author.findOne({ where: { name: 'Burne Hogarth' } })
    const bhTown = await models.hometown.findOne({ where: { name: 'Chicago, Illinois'} })
    await bh.update({ hometownId: bhTown.id })
    
    const ml = await models.author.findOne({ where: { name: 'Mark Lutz' } })
    const mlTown = await models.hometown.findOne({ where: { name: 'Minneapolis, Minnesota'} })
    await ml.update({ hometownId: mlTown.id })
    

    const gb = await models.author.findOne({ where: { name: 'Gwendolyn Brooks' } })
    const gbTown = await models.hometown.findOne({ where: { name: 'Chicago, Illinois'} })
    await gb.update({ hometownId: gbTown.id })

    const ss = await models.author.findOne({ where: { name: 'Shel Silverstein' } })
    const ssTown = await models.hometown.findOne({ where: { name: 'Chicago, Illinois'} })
    await ss.update({ hometownId: ssTown.id })

    const cs = await models.author.findOne({ where: { name: 'Carl Sandburg' } })
    const csTown = await models.hometown.findOne({ where: { name: 'Chicago, Illinois'} })
    await cs.update({ hometownId: csTown.id })




  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    models.author.update({
      hometownId: null
    }, {
      where: {}
    })
  }
};
