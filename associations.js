const models = require('./models');
const subject = require('./models/subject');
// get all authors from Chicago
const getAuthorsFromChicago = async () => {
    let chicago = await models.hometown.findOne({
        where: {
            name: 'Chicago, Illinois'
        }
    })
    const authors = await chicago.getAuthors()
    console.log(authors);
}
// getAuthorsFromChicago()
// get Stephen King's hometown
const sKHometown = async () => {
    const sk = await models.author.findOne({
        where: {
            name: 'Stephen King'
        }
    })
    const home = await sk.getHometown()
    console.log(home);
}
//sKHometown()
// get all books by Mark Lutz
const getAllbooks = async () => {
    const author = await models.author.findOne({
        where: {
        name: 'Mark Lutz'
        }
    })
    const booksByML = await author.getBooks()
    console.log(booksByML);
}
//getAllbooks()
// get the author of Little Women
const authorOfLW = async () => {
    const bookLW = await models.book.findOne({
        where: {
            title: 'Little Women'
        }
    })
    let author = await bookLW.getAuthor()
    console.log(author);
}
//authorOfLW()
// get all books in the Childrens Books subject
const childBooks = async () => {
    const cBSubject = await models.subject.findOne({
        where: {
            name: 'Childrens Books'
        }
    })
    const allBooks = await cBSubject.getBooks()
    console.log(allBooks);
}
//childBooks()
// Get the subject of the 2001 Space Oddyssey
const subjectSpace = async () => {
    const spaceO = await models.book.findOne({
        where: {
            title: '2001: Space Odyssey'
        }
    })
    const subjectOfSO = await spaceO.getSubject()
    console.log(subjectOfSO);
}
//subjectSpace()
// get all subjects that Mark Lutz has written on
const mLSubjects = async () => {
    const authorML = await models.author.findOne({
        where: {
            name: 'Mark Lutz'
        }
    })
    const allSubjects = await authorML.getSubjects()
    console.log(allSubjects);
}
//mLSubjects()
// get all authors that have written books in the Childrens Books subject

const childBookAuthors = async () => {
    const sub = await models.subject.findOne({
        where: {
            name: 'Childrens Books'
        }
    })
    const booksInSub = awaitsub.getBooks()
    console.log(booksInSub);
}
// childBookAuthors()