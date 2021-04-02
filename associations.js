const models = require('./models');
// get all authors from Chicago

const allChicagoAuthors = async () => {
    try {
        const chicago = await models.hometown.findOne(
            {
                where: {
                    name: 'Chicago, Illinois'
                }
            }
        )

        const chicagoAuthors = await models.author.findAll(
            {
                where: {
                    hometownId: chicago.id
                }
            }
        )

        console.log(chicagoAuthors);

    } catch (error) {
        console.log(error);
    }
}

allChicagoAuthors()
// get Stephen King's hometown

const stephenHometown = async () => {
    const stephenKing = await models.author.findOne(
        {
            where: {
                name: 'Stephen King'
            }
        }
    )

    const hometown = await stephenKing.getHometown();

    console.log(hometown);

}

stephenHometown()

// get all books by Mark Lutz

const markBooks = async () => {
    const mark = await models.author.findOne(
        {
            where: {
                name: 'Mark Lutz'
            }
        }
    )

    const books = await mark.getBooks();
    console.log(books);
}

markBooks()

// get the author of Little Women

const littleWomenAuthor = async () => {
    const book = await models.book.findOne(
        {
            where: {
                title: 'Little Women'
            }
        }
    )

    console.log(book);

    const author = await book.getAuthor();
    console.log(author);
}

littleWomenAuthor()
// get all books in the Childrens Books subject

const allChildrenBooks = async () => {

    const childrenBooks = await models.subject.findOne(
        {
            where: {
                name: 'Childrens Books'
            }
        }
    )

    const books = await childrenBooks.getBooks();
    console.log(books);
}
allChildrenBooks()
// Get the subject of the 2001 Space Oddyssey

const spaceOddysseySubject = async () => {
    const book = await models.book.findOne(
        {
            where: {
                title: '2001: A Space Odyssey'
            }
        }
    )

    const subject = await book.getSubject();

    console.log(subject);
}
spaceOddysseySubject()

// get all subjects that Mark Lutz has written on

const markSubjects = async () => {
    const mark = await models.author.findOne(
        {
            where: {
                name: 'Mark Lutz'
            }
        }
    )

    const subjects = await mark.getSubjects();
}

markSubjects()
// get all authors that have written books in the Childrens Books subject

const childrenBookAuthors = async () => {
    const childrenBooks = await models.subject.findOne(
        {
            where: {
                name: 'Childrens Books'
            }
        }
    )

    const authors = await childrenBooks.getAuthors();
    console.log(authors);
}
childrenBookAuthors()

