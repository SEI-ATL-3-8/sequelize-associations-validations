const models = require('./models/');
const {Op} = require('sequelize')
const {hometown,book,author,subject} = models;

// get all authors from Chicago
// (async() => {
//     const chicago = await hometown.findOne({where:{name:'Chicago, Illinois'}});
//     const chicagoAuthors = await chicago.getAuthors();
//     console.log(chicagoAuthors);
// })();
// get Stephen King's hometown
// (async() => {
//     const stephenKing = await author.findOne({where:{name: 'Stephen King'}});
//     const stephenKingHometown = await stephenKing.getHometown();
//     console.log(stephenKingHometown);
// })();
// get all books by Mark Lutz
// (async() => {
//     const markLutz = await author.findOne({where:{name:'Mark Lutz'}});
//     const markLutzBooks = await markLutz.getBooks();
//     console.log(markLutzBooks);
// })();
// get the author of Little Women
// (async() => {
//     const littleWomen = await book.findOne({where:{title:'Little Women'}});
//     const littleWomenAuthor = await littleWomen.getAuthor();
//     console.log(littleWomenAuthor);
// })();
// get all books in the Childrens Books subject
// (async() => {
//     const childrensSubject = await subject.findOne({where:{name:{[Op.iLike]:'Children%'}}});
//     const childrenBooks = await childrensSubject.getBooks();
//     console.log(childrenBooks);
// })();
// Get the subject of the 2001 Space Oddyssey
// (async() => {
//     const spaceOddysey = await book.findOne({where:{title:{[Op.iLike]:'2001%'}}});
//     const spaceOddyseySubject = await spaceOddysey.getSubject();
//     console.log(spaceOddyseySubject);
// })();
// get all subjects that Mark Lutz has written on
// (async() => {
//     const markLutz = await author.findOne({where:{name:'Mark Lutz'}});
//     const markLutzBooks = await markLutz.getBooks();
//     for (let book of markLutzBooks) {
//         const subject = await book.getSubject();
//         console.log(subject);
//     }
// })();
// get all authors that have written books in the Childrens Books subject

(async() => {
    const childrensSubject = await subject.findOne({where:{name:{[Op.iLike]:'Children%'}}});
    const childrenBooks = await childrensSubject.getBooks();
    for (let book of childrenBooks) {
        const author = await book.getAuthor();
        console.log(author);
    }
})();