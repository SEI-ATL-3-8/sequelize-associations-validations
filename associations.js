const models = require('./models')

// get all authors from Chicago
// const findAllAuthors = async() => {
//         const allAuthors = await models.hometown.findAll({
//             where: {
//                 name: 'Chicago, Illinois'
//             }
//         })
//         console.log(allAuthors)
//     }
//     // findAllAuthors()





// get Stephen King's hometown

// const kingsHome = async() => {
//     const king = await models.author.findOne({
//         where: {
//             name: 'Stephen King'
//         }
//     })
//     const hometown = await king.getHometown()
//     console.log(hometown);
// }
// kingsHome()




// get all books by Mark Lutz

// const allMark = async() => {
//     const lutz = await models.author.findOne({
//         where: {
//             name: 'Mark Lutz'
//         }
//     })

//     const allbook = await lutz.getBooks()

//     console.log(allbook)
// }
// // allMark()





// get the author of Little Women

// const authorLW = async() => {
//     const lW = await models.book.findOne({
//         where: {
//             title: 'Little Women'
//         }
//     })
//     const author = await lW.getAuthor()

//     console.log(author);

// }
// authorLW()




// get all books in the Childrens Books subject

// const getAllBooks = async() => {
//     children = await models.subject.findOne({
//         where: { name: 'Childrens Books' }
//     })
//     const childrenBooks = await children.getBooks()
//     console.log(childrenBooks);
// }
// getAllBooks()




// Get the subject of the 2001 Space Oddyssey

// const space = async() => {
//     const odyssey = await models.book.findOne({
//         where: { title: '2001: A Space Odyssey' }
//     })
//     const sO = await odyssey.getSubject();
//     console.log(sO)
// }
// space()

// get all subjects that Mark Lutz has written on

// const allMark = async() => {
//     const lutz = await models.author.findOne({
//         where: {
//             name: 'Mark Lutz'
//         }
//     })

//     const allbook = await lutz.getSubjects()

//     console.log(allbook)
// }
// allMark()



// get all authors that have written books in the Childrens Books subject

// const getAllBooks = async() => {
//     children = await models.subject.findOne({
//         where: { name: 'Childrens Books' }
//     })
//     const childrenBooks = await children.getAuthors()
//     console.log(childrenBooks);
// }
// getAllBooks()