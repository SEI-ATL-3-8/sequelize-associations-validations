// get all authors from Chicago
const models = require('./models')

const allAuthors = async () => {
    const chicago = await models.hometown.findOne({
        where: {
            name: 'Chicago, Illinois'
        }
    })

    const authors = await chicago.getAuthors()
    console.log(authors);
}
allAuthors()


// get Stephen King's hometown

const kingHometown = async () => {
    const stephen = await models.author.findOne({
        where: {
            name: 'Stephen King'
        }
    })
   
    const hometown = await stephen.getHometown()
    console.log(hometown);
}
kingHometown()


// get all books by Mark Lutz

const allBooks = async () => {
    const mark = await models.author.findOne({
        where: {
            name: 'Mark Lutz'
        }
    })
 
    const book = await mark.getBook()
    console.log(book);
}
allBooks()


// get the author of Little Women


const authorName = async () => {
    const littleWomen = await models.book.findOne({
        where: {
            title: 'Little Women'
        }
    })

    const author = await littleWomen.getAuthor()
    console.log(author)
}

authorName()

// get all books in the Childrens Books subject

const allBooks = async () => {
    const children = await models.subject.findOne({
        where: {
            name: 'Childrens Books'
        }
    })
    // console.log(children)
    const books = await children.getBooks()
    console.log(books);
}
allBooks()

// Get the subject of the 2001 Space Oddyssey

const subjectName = async () => {
    const space = await models.book.findOne({
        where: {
            title: '2001: A Space Odyssey'
        }
    })

    const subject = await space.getSubject()
    console.log(subject)
}

subjectName()

// get all subjects that Mark Lutz has written on

const allSubjects = async () => {
    const mark = await models.author.findOne({
        where: {
            name: 'Mark Lutz'
        }
    })
 
    const subjects = await mark.getSubjects()
    console.log(subjects);
}
allSubjects()

// get all authors that have written books in the Childrens Books subject

const allAuthors = async () => {
    const children = await models.subject.findOne({
        where: {
            name: 'Childrens Books'
        }
    })
  
    const authors = await children.getAuthors()
    console.log(authors);
}
allAuthors()
