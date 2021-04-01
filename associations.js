// get all authors from Chicago
const models = require('./models')

async function authorChicago(){
    const  chicago = await models.hometown.findOne({where:{name: "Chicago, Illinois"}})
    const chicagoAuthors = await chicago.getAuthors()
    console.log(chicagoAuthors)
    
}
// authorChicago()
// get Stephen King's hometown


async function findHometown(){
    const auhtor = await models.author.findOne({where:{name:"Stephen King"}})
    const stephHometown = await auhtor.getHometown()
    console.log(stephHometown)
}
// findHometown()
// get all books by Mark Lutz
async function findMarkBook(){
    const mark = await models.author.findOne({where:{name:"Mark Lutz"}})
    const markBooks = await mark.getBooks()
    console.log(markBooks)
}
// findMarkBook()


// get the author of Little Women

async function findAuthor(){
    const keyword = await models.book.findOne({where:{title:"Little Women"}})
    const author = await keyword.getAuthor()
    console.log(author)
}
//findAuthor()

// get all books in the Childrens Books subject
async function findSubject(){
    const keyword = await models.subject.findOne({where:{name:"Childrens Books"}})
    const books = await keyword.getBooks()
    console.log(books)
}
// findSubject()



// Get the subject of the 2001 Space Oddyssey
async function findSubjectBook(){
    const keyword = await models.book.findOne({where:{title:"2001: A Space Odyssey"}})
    const subject = await keyword.getSubject()
    console.log(subject)
    
}
// findSubjectBook()
// get all subjects that Mark Lutz has written on
async function findSubjects(){
    const keyword = await models.author.findOne({where:{name:"Mark Lutz"}})
    const subject = await keyword.getSubjects()
    console.log(subject)
    
}
// findSubjects()

// get all authors that have written books in the Childrens Books subject

async function findAuthors(){
    const keyword = await models.subject.findOne({where:{name:"Childrens Books"}})
    const author = await keyword.getAuthors()
    console.log(author)
    
}
// findAuthors()