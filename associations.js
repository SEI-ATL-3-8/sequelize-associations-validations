const models = require('.models')


// get all authors from Chicago

const chiAuthors = async () => {
    const chicago = await models.hometown.findOne({
        where: {
            name: 'Chicago, Illinois'
        }
    })

    const authors = await chicago.getAuthors()
    console.log(authors)
}
chiAuthors()

// get Stephen King's hometown

const kingHome = async () => {
    const king = await models.author.findOne({
        where: {
            name: 'Stephen King'

        }
    })

    const kingHometown = await king.getHometown()
    console.log(kingHometown)
}
kingHome()

// get all books by Mark Lutz

const markBooks = async () => {
    const mark = await models.author.findOne({
        where: {
            name: 'Mark Lutz'
        }

    })
    const allBooks = await mark.getBooks()
    console.log(allBooks)
}
markBooks()



// get the author of Little Women

const littleAuthor = async () => {
    const littlebook = await models.book.findOne({
        where:
            {title: 'Little Women'}
    })

    const nameOfAuthor = await littlebook.getAuthor()
    console.log(nameOfAuthor)
}
littleAuthor()


// get all books in the Childrens Books subject

const childrenSubject = async () => {
    const childrenBooks = await models.subject.findOne(
        {where: {
            name: 'Childrens Book'
        }
    })

    const books = await childrenBooks.getBooks()
    console.log(books)
}
childrenSubject()

// Get the subject of the 2001 Space Oddyssey
const oddysseySubject = async () => {
    const oddysseyBook = await models.book.findOne(
        {where: {
            title: '2001: A Space Odyssey'
        }
    })

    const spaceSubject = await oddysseyBook.getSubject()
    console.log(spaceSubject)
}
oddysseySubject()


// get all subjects that Mark Lutz has written on
const markSubjects = async () => {
    const mark = await models.author.findOne({
        where: {
            name: 'Mark Lutz'
        }

    })
    const markBooks = await mark.getSubjects()
    console.log(markBooks)
}
markSubjects()

// get all authors that have written books in the Childrens Books subject

const childrenAuthors = async () => {
    const childrenBooks = await models.subject.findOne(
        {where: {
            name: 'Childrens Book'
        }
    })

    const author = await childrenBooks.getAuthors()
    console.log(author)
}
childrenAuthors()
