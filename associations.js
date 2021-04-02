const models = require('./models')

// models.author.findAll().then(res => console.log(res))
// models.book.findAll().then(res => console.log(res))
// models.hometown.findAll().then(res => console.log(res))
// models.subject.findAll().then(res => console.log(res))


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
// chicagoAuthor()


// get Stephen King's hometown

const stephenHomtown = async () => {
    const stephen = await models.author.findOne({
        where:{
            name: 'Stephen King'
        }
    })
    const hometown = await stephen.getHometown()
    console.log(hometown)
}
// stephenHomtown()


// get all books by Mark Lutz

const markBooks = async () => {
    const mark = await models.author.findOne({
        where:{
            name: 'Mark Lutz'
        }
    })
    const markAllBook = await mark.getBooks()
    console.log(markAllBook)
}
// markBooks()

// get the author of Little Women

const findAuthor = async () => {
    const women = await models.book.findOne({
        where:{
            title: 'Little Women'
        }
    })
    const littleWomenAuthor = await women.getAuthor()
    console.log(littleWomenAuthor)
}
// findAuthor()

// get all books in the Childrens Books subject.

const getBooks = async () => {
    const childerns = await models.subject.findOne({
        where:{
            name: 'Childrens Books'
        }
    })
    const allBooks = await childerns.getBooks()
    console.log(allBooks)
}
// getBooks()


// Get the subject of the 2001 Space Oddyssey

const getSubject = async () => {
    const spaceO = await models.book.findOne({
        where:{
            title: '2001: A Space Odyssey'
        }
    })
    const subject = await spaceO.getSubject()
    console.log(subject)
}
// getSubject()

// get all subjects that Mark Lutz has written on

const allSubject = async () => {
    const markLutz = await models.author.findOne({
        where:{
            name: 'Mark Lutz'
        }
    })
    const markSubject = await markLutz.getSubjects()
    console.log(markSubject)
}
// allSubject()

// get all authors that have written books in the Childrens Books subject

const allAuthors = async () => {
    const childerns = await models.subject.findOne({
        where:{
            name: 'Childrens Books'
        }
    })
    const childerensAuthors = await childerns.getAuthors()
    console.log(childerensAuthors)
}
allAuthors()