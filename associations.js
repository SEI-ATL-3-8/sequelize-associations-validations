const models = require('./models')
// get all authors from Chicago
const getChiefKeefsFriends = async () => {
    const chi = await models.hometown.findOne({where:{name: 'Chicago, Illinois'}})
    const auths = await chi.getAuthors()
    console.log(auths)
}
// getChiefKeefsFriends()

// get Stephen King's hometown

const wherSteveFrom = async () => {
    const steve = await models.author.findOne({where:{name: 'Stephen King'}})
    const hT = await steve.getHometown()
    console.log(hT)
}
// wherSteveFrom()

// get all books by Mark Lutz

const marksBooks = async () => {
    const mark = await models.author.findOne({where:{name: 'Mark Lutz'}})
    const books = await mark.getBooks()
    console.log(books)
}
// marksBooks()

// get the author of Little Women

const getAuthLilWo = async () => {
    const book = await models.book.findOne({where:{title: 'Little Women'}})
    const auth = await book.getAuthor()
    console.log(auth)
}
// getAuthLilWo()
 
// get all books in the Childrens Books subject

const getKidBooks = async () => {
    const sub = await models.subject.findOne({where:{name: 'Childrens Books'}})
    const books = await sub.getBooks()
    console.log(books)
}
// getKidBooks()

// Get the subject of the 2001 Space Oddyssey
const subSpace = async () => {
    const space = await models.book.findOne({where:{title: '2001: A Space Odyssey'}})
    const sub = await space.getSubject()
    console.log(sub)
}
// subSpace()
// get all subjects that Mark Lutz has written on

const marksSubs = async () => {
    const mark = await models.author.findOne({where:{name: 'Mark Lutz'}})
    const subs = await mark.getSubjects()
    console.log(subs)
}
// marksSubs()

// get all authors that have written books in the Childrens Books subject
const childAuths = async () => {
    const sub = await models.subject.findOne({where:{name:'Childrens Books'}})
    const auths = await sub.getAuthors()
    console.log(auths)
}
// git a