const models = require('./models')

// get all authors from Chicago

/* const allAuthorsChicago = async () => {
    try {
        const chicago = await models.hometown.findOne({
            where: {
                name: 'Chicago, Illinois'
            }
        })

        const res = await chicago.getAuthors()
        console.log(res)
    } catch (error) {
        console.log(error.message)
    }
}
allAuthorsChicago() */

// get Stephen King's hometown

/* const stephenKingHome = async () => {
    try {
        const stephenKing = await models.author.findOne({
            where: {
                name: 'Stephen King'
            }
        })

        const res = await stephenKing.getHometown()
        console.log(res)
    } catch (error) {
        console.log(error.message)
    }
}
stephenKingHome() */

// get all books by Mark Lutz

/* const allBooksLutz = async () => {
    try {
        const markLutz = await models.author.findOne({
            where: {
                name: 'Mark Lutz'
            }
        })
        
        const res = await markLutz.getBooks()
        console.log(res)
    } catch (error) {
        console.log(error.message)
    }
}
allBooksLutz() */

// get the author of Little Women

/* const authorLittleWomen = async () => {
    try {
        const littleWomen = await models.book.findOne({
            where: {
                title: 'Little Women'
            }
        })

        const res = await littleWomen.getAuthor()
        console.log(res)
    } catch (error) {
        console.log(error.message)
    }
}
authorLittleWomen() */

// get all books in the Childrens Books subject

/* const allChildrensBooks = async () => {
    try {
        const childrenSubject = await models.subject.findOne({
            where: {
                name: 'Childrens Books'
            }
        })

        const res = await childrenSubject.getBooks()
        console.log(res)
    } catch (error) {
        console.log(error.message)
    }
}
allChildrensBooks() */

// Get the subject of the 2001 Space Oddyssey

/* const subjectSpaceOdyssey = async () => {
    try {
        const spaceOdyssey = await models.book.findOne({
            where: {
                title: '2001: A Space Odyssey'
            }
        })

        const res = await spaceOdyssey.getSubject()
        console.log(res)
    } catch (error) {
        console.log(error.message)
    }
}
subjectSpaceOdyssey() */

// get all subjects that Mark Lutz has written on

/* const allSubjectsLutz = async () => {
    try {
        const markLutz = await models.author.findOne({
            where: {
                name: 'Mark Lutz'
            }
        })

        const res = await markLutz.getSubjects()
        console.log(res)
    } catch (error) {
        console.log(error.message)
    }
}
allSubjectsLutz() */

// get all authors that have written books in the Childrens Books subject

const allAuthorsChildrens = async () => {
    try {
        const childrenSubject = await models.subject.findOne({
            where: {
                name: 'Childrens Books'
            }
        })

        const res = await childrenSubject.getAuthors()
        console.log(res)
    } catch (error) {
        console.log(error.message)
    }
    
}
allAuthorsChildrens()
