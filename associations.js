const models = require('./models')

// get all authors from Chicago

// const allAuthors = async () => {
//     // const chicago = await models.author.findAll({
//     //     where: {
//     //         name: 'Chicago'
//     //     }
//     // })
//     // console.log(chicago)
//     const hometown = await models.hometown.findOne({
//         where: {
//             name: 'Chicago, Illinois'
//         }
//     })
//     console.log(hometown)
//     const authors = await hometown.getAuthors()
//     console.log(authors)
// }
// allAuthors();



// get Stephen King's hometown

// const kingHome = async () => {
//     const stephen = await models.hometown.findOne({
//         where: {
//             name: 'Stephen King'
//         }
//     })
// }
// kingHome();
// get all books by Mark Lutz


// const allMarkBooks = async () => {
//     const markLutz = await models.book.findAll({
//         where: {
//             name: 'Mark Lutz'
//         }
//     })
// }

// get the author of Little Women

// const whoWrote = async () => {
//     const littleWomen =
// }

// get all books in the Childrens Books subject

// const kidsBooks = async () => {
//     const kids = await models.subject.findAll({
//         where: {
//             name: 'Childrens Books'
//         }
//     })
//     console.log(kids);
// }
// kidsBooks();
// Get the subject of the 2001 Space Oddyssey

// const whatSubject = async () => {
//     const spaceOddyssey = await models.subject.findOne({
//         where: {
//             name: '2001 Space Oddyssey'
//         }
//     })
//     console.log(spaceOddyssey);
// }
// whatSubject();



// get all subjects that Mark Lutz has written on

const markSubject = async () => {
    const mark = await models.subject.findAll({
        where: {
            name: 'Mark Lutz'
        }
    })
    console.log(mark)
}

markSubject();
// get all authors that have written books in the Childrens Books subject

// const whoWroteKidsBooks = async () => {
//     const books
// }