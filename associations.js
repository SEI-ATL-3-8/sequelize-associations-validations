const models = require('./models')
// get all authors from Chicago
const fromChicago = async () => {
    const chicago = await models.hometown.findOne({where:{name:'Chicago, Illinois'} })
    const author = await chicago.getAuthors()

    console.log(author)
}
// fromChicago()
// get Stephen King's hometown
const stHome = async () => {
    const stephen = await models.author.findOne({where:{name:'Stephen King'}})
    const home = await stephen.getHometown()
    console.log(home)
}
// stHome()
// get all books by Mark Lutz
const markAllBook = async() => {
    const mark = await models.author.findOne({where:{name:'Mark Lutz'}})
    const allbooks= await mark.getBooks()
    console.log(allbooks)
}
// markAllBook()

// get the author of Little Women
const littleAuthor = async () => {
    const little = await models.book.findOne({where:{name:'Little Women'}})
    const author = await little.getAuthor()
    console.log(author)
}
// littleAuthor()
// get all books in the Childrens Books subject
const childrenBooks = async () => {
    const chisub = await models.subject.findOne({where:{name:"Childrens Books"}})
    const chibook = await chisub.getBooks()
    console.log(chibook)
}
// childrenBooks()
// Get the subject of the 2001 Space Oddyssey
const oddsubject =  async () => {
    const oddy =  await models.book.findOne({where:{title:'2001: A Space Odyssey'}})
    const sub = await oddy.getSubject()
    console.log(sub)
}
// oddsubject()

// get all subjects that Mark Lutz has written on
const allSubFromMark = async () => {
    const mark = await models.author.findOne({where:{name:'Mark Lutz'}})
    const allsub = await mark.getSubjects()
    console.log(allsub)
}
// allSubFromMark()

// get all authors that have written books in the Childrens Books subject
const allAuthorFromChild = async () => {
    const child = await models.subject.findOne({where:{name:'Childrens Books'}})
    const allAuthor = await child.getAuthors()
    console.log(allAuthor)
}
// allAuthorFromChild()

