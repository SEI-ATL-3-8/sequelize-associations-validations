// get all authors from Chicago
const models = require('./models')

// const chiAuth = async ()=> {

//     const hometown = await models.hometown.findOne({
//         where:{
//             name: 'Chicago, Illinois'
//         }
//     })
//     console.log(hometown)

//     const authors = await hometown.getAuthors()

//     console.log(authors)

// //     // const author = await models.author.findAll({
// //     //     where:{
// //     //         name: 'Chicago, Illinois'
// //     //     }
// //     // })
// //     // console.log(hometown)
//     }
    
//     chiAuth()
    

// get Stephen King's hometown

// const stepHome = async () =>{
//     const author = await models.author.findOne({
//                 where:{
//                     name: 'Stephen King'
//                 }
//             })
//             console.log(author)
//     const hometown = await author.getHometown()

//     console.log(hometown)

// }

// stepHome()

// get all books by Mark Lutz

// const markBook = async () =>{
//     const author = await models.author.findAll({
//                 where:{
//                     name: 'Mark Lutz'
//                 }
//             })
//             console.log(author)
//     const books = awselect ait author.getBooks()

//     console.log(books)

// }

// markBook()

// get the author of Little Women

const littleBook = async () =>{
        const book = await models.book.findOne({
                    where:{
                        title: 'Little Women'
                    }
                })
                console.log(book)
        // const books = await author.getBooks()
    
        // console.log(books)
    
    }

littleBook()

// get all books in the Childrens Books subject

// Get the subject of the 2001 Space Oddyssey

// get all subjects that Mark Lutz has written on

// get all authors that have written books in the Childrens Books subject

