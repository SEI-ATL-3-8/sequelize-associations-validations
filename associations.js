const models = require('./models')

// get all authors from Chicago
const chicagoAuthor = async () => {
    const chicago = await models.hometown.findOne({
        where: {
            name: 'Chicago, Illinois'
            
        }
    })
    const authors = await chicago.getAuthors()
    console.log(authors)
}
// chicagoAuthor();

// get Stephen King's hometown
const kingHometown = async () => {
    const king = await models.author.findOne({
        where: {
            name: 'Stephen King'
        }
    })
    const hisHometown = await king.getHometown()
    console.log(hisHometown)
}
// kingHometown();

// get all books by Mark Lutz
const findBooks = async () => {
    const mark = await models.author.findOne({
        where: {
            name: 'Mark Lutz'
        }
    })
    const markBooks = await mark.getBooks()
    console.log(markBooks)
}
// findBooks();

// get the author of Little Women
const findAuthor = async () => {
    const littleWomen = await models.book.findOne({
        where: {
            title: 'Little Women'
        }
    })
    const bookAuthor = await littleWomen.getAuthor()
    console.log(bookAuthor)
}
// findAuthor();

// get all books in the Childrens Books subject
const childBooks = async () => {
    const findSubject = await models.subject.findOne({
        where: {
            name: 'Childrens Books'
        }
    })
    const allBooks = await findSubject.getBooks()
    console.log(allBooks)
}
// childBooks();

// Get the subject of the 2001 Space Oddyssey
const spaceSubject = async () => {
    const findSubject = await models.book.findOne({
        where: {
            title: '2001: A Space Odyssey'
        }
    })
    const bookSubject = await findSubject.getSubject()
    console.log(bookSubject)
}
// spaceSubject();

// get all subjects that Mark Lutz has written on
const markSubject = async () => {
    const mark = await models.author.findOne({
        where: {
            name: 'Mark Lutz'
        }
    })
    const allBooks = await mark.getSubjects()
    console.log(allBooks)
}
// markSubject();

// get all authors that have written books in the Childrens Books subject
const bookAuthors = async () => {
    const subject = await models.subject.findOne({
        where: {
            name: 'Childrens Books'
        }
    })
    const authors = await subject.getAuthors()
    console.log(authors)
}
// bookAuthors();
