const models = require('./models')
const { author, book, hometown, subject } = models
const { Op } = require('sequelize')
// get all authors from Chicago

const getChicagoAuthors = async () => {
    try {
        const chicago = await hometown.findOne({where: {name:{[Op.iLike]:'%Chicago%'}}})
        const authors = await chicago.getAuthors()
        authors.forEach(author => console.log(author.name, ';Chicago authors'))
    } catch (error) {
        console.log(error)
    }
}
getChicagoAuthors()

// get Stephen King's hometown

const whereIsKingFrom = async () => {
    try {
        const king = await author.findOne({where: {name: {[Op.iLike]: '%King%'}}})
        const ht = await king.getHometown()
        console.log(ht.name, ";King's hometown")
    } catch (error) {
        console.log(error)
    }
}
whereIsKingFrom()

// get all books by Mark Lutz

const marksBooks = async () => {
    try {
        const mark = await author.findOne({where: {name: {[Op.iLike]: '%lutz%'}}})
        const books = await mark.getBooks()
        books.forEach(book => console.log(book.title, ';One of Marks books'))
    } catch (error) {
        console.log(error)
    }
}
marksBooks()

// get the author of Little Women

const authorOf = async () => {
    try {
        const lw = await book.findOne({where: {title: {[Op.iLike]: '%little women%'}}})
        const auth = await lw.getAuthor()
        console.log(auth.name, ';Author of Little Women') 
    } catch (error) {
        console.log(error)
    }
}
authorOf()

// get all books in the Childrens Books subject

const allChildrensBooks = async () => {
    try {
        const childBooks = await subject.findOne({where: {name: {[Op.iLike]: '%child%'}}})
        const allBooks = await childBooks.getBooks()
        allBooks.forEach(book => console.log('One childrens book ;', book.title))
    } catch (error) {
        console.log(error)
    }
}
allChildrensBooks()

// Get the subject of the 2001 Space Oddyssey

const spaceSubject = async () => {
    try {
        const spaceO = await book.findOne({where: {title: {[Op.iLike]: '%2001%'}}})
        const sub = await spaceO.getSubject()
        console.log('The subject of 2001 Space Oddyssey;', sub.name)
    } catch (error) {
        console.log(error)
    }
}
spaceSubject()

// get all subjects that Mark Lutz has written on

const marksRepetuar = async () => {
    try {
        const mark = await author.findOne({where: {name: {[Op.iLike]: '%lutz%'}}})
        const subs = await mark.getSubjects()
        subs.forEach(sub => console.log(`Mark has written a ${sub.name} book.`))
    } catch (error) {
        console.log(error)
    }
}
marksRepetuar()

// get all authors that have written books in the Childrens Books subject

const childAuthors = async () => {
    try {
        const sub = await subject.findOne({where: {name: {[Op.iLike]: '%children%'}}})
        const auths = await sub.getAuthors()
        auths.forEach(auth => console.log(`${auth.name} has written a childrens book`))
    } catch (error) {
        console.log(error)
    }
}
childAuthors()