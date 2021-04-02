const models = require('./models')

// models.book.findAll().then(res => console.log(res))
// models.author.findAll().then(res => console.log(res))
// // models.hometown.findAll().then(res => console.log(res))
// models.subject.findAll().then(res => console.log(res))

// get all authors from Chicago

// const getAuthors = async () => {
//     const chicago = await models.hometown.findOne({
//         where: {
//             name: 'Chicago, Illinois'
//         }
//     })
//     const chicagoAuthors = await chicago.getAuthors()
//     console.log(chicagoAuthors)
// }

// getAuthors()

// get Stephen King's hometown

// const hometownSK = async () => {
//     const king = await models.author.findOne({
//         where: {
//             name: 'Stephen King'
//         }
//     })
//     const kingHometown = await king.getHometown()
//     console.log(kingHometown)
// }

// hometownSK()

// get all books by Mark Lutz

// const getLutzBooks = async () => {
//     const lutz = await models.author.findOne({
//         where: {
//             name: 'Mark Lutz'
//         }
//     })
//     const lutzBooks = await lutz.getBooks()
//     console.log(lutzBooks)
// }

// getLutzBooks()

// get the author of Little Women

// const authorLW = async () => {
//     const littleWomen = await models.book.findOne({
//         where: {
//             title: 'Little Women'
//         }
//     })
//     const authorLittleWomen = await littleWomen.getAuthor()
//     console.log(authorLittleWomen)
// }

// authorLW()


// get all books in the Childrens Books subject

// const getChildrens = async () => {
//     const childrens = await models.subject.findOne({
//         where: {
//             name: 'Childrens Books'
//         }
//     })
//     const allChildrens = await childrens.getBooks()
//     console.log(allChildrens)
// }

// getChildrens()

// Get the subject of the 2001 Space Oddyssey

// const get2001Subject = async () => {
//     const spaceOdyssey = await models.book.findOne({
//         where: {
//             title: '2001: A Space Odyssey'
//         }
//     })
//     const odysseySubject = await spaceOdyssey.getSubject()
//     console.log(odysseySubject)

// }

// get2001Subject()


// get all subjects that Mark Lutz has written on

// const getLutzSubjects = async () => {
//     const lutz = await models.author.findOne({
//         where: {
//             name: 'Mark Lutz'
//         }
//     })
//     const lutzSubjects = await lutz.getSubjects()
//     console.log(lutzSubjects)
// }

// getLutzSubjects()



// get all authors that have written books in the Childrens Books subject

// const getChildrensAuthors = async () => {
//     const childrens = await models.subject.findOne({
//         where: {
//             name: 'Childrens Books'
//         }
//     })
//     const childrensAuthors = await childrens.getAuthors()
//     console.log(childrensAuthors)
// }

// getChildrensAuthors()
