const models = require('./models/')
// get all authors from Chicago
// models.hometown.findAll({
//     where: {
//         name: 'Chicago'
//     }
// }).then(res => {
//     console.log(res)
// })
// get Stephen King's hometown
    // const sK = async () => {

    //     const sKperson = await models.author.findOne({
    //         where:{
    //             name: 'Stephen King'
    //         }
    //     })

    //     const skhometown = await sKperson.getAuthor()
    //     console.log(skhometown)
    // }
    // sK()
// get all books by Mark Lutz

// const mL = async () => {

//     const mLperson = await models.author.findOne({
//         where:{
//             name: 'Mark Lutz'
//         }
//     })

//     const mLbooks = await mLperson.getBook()
//     console.log(mLbooks)
// }
// mL()

// get the author of Little Women

// const lW = async () => {

//     const littleW = await models.book.findOne({
//         where:{
//             name: 'Little Women'
//         }
//     })

//     const littleA = await littleW.getAuthor()
//     console.log(littleA)

// }
// lW()

// get all books in the Childrens Books subject

// const cB = async () => {

//     const childBooks = await models.subject.findOne({
//         where:{
//             name: 'Children Books'
//         }
//     })

//     const allChild = await childBooks.getAuthors()
//     console.log(allChild)
// }
// cB()
// Get the subject of the 2001 Space Oddyssey

// const sK = async () => {

//     const spaceOd = await models.book.findOne({
//         where:{
//             name: '2001 Space Oddyssey'
//         }
//     })

//     const spaceSubject = await spaceOd.getAuthors()
//     console.log(spaceSubject)
// }
// sK()


// get all subjects that Mark Lutz has written on

// get all authors that have written books in the Childrens Books subject

