const models = require('./models')

// get all authors from Chicago
const getChicagoAuthors = async () => {
    const chicago = await models.hometown.findOne({where:{name:'Chicago, Illinois'}})
    const chicagoAuthors = await chicago.getAuthors();
    console.log(chicagoAuthors);
}
// getChicagoAuthors()

// get Stephen King's hometown
const findKingHometown = async () => {
    const king = await models.author.findOne({where:{name:'Stephen King'}})
    const kingsTown = await king.getHometown();
    console.log(kingsTown);
}
// findKingHometown()

// get all books by Mark Lutz
const getMarksBooks = async () => {
    const mark = await models.author.findOne({where:{name:'Mark Lutz'}});
    const marksBooks = await mark.getBooks()
    console.log(marksBooks);
}
// getMarksBooks()

// get the author of Little Women
const findLilWomenAuthor = async () => {
    const lilWomen = await models.book.findOne({where:{title:'Little Women'}})
    const lilWomenAuthor = await lilWomen.getAuthor();
    console.log(lilWomenAuthor);
}
// findLilWomenAuthor()


// get all books in the Childrens Books subject
const findChildrensBooks = async () => {
    const childrenSubject = await models.subject.findOne({where:{name:'Childrens Books'}})
    const childrensBooks = await childrenSubject.getBooks()
    console.log(childrensBooks);
}
// findChildrensBooks()

// Get the subject of the 2001 Space Oddyssey
const findSpaceSubject = async () => {
    const spaceOdyssey = await models.book.findOne({where:{title: '2001: A Space Odyssey'}})
    const spaceSubject = await spaceOdyssey.getSubject()
    console.log(spaceSubject);
}
// findSpaceSubject()
// get all subjects that Mark Lutz has written on
const findMarkSubjects = async () => {
    const mark = await models.author.findOne({where:{name:'Mark Lutz'}});
    const markSubjects = await mark.getSubjects();
    console.log(markSubjects);
}
// findMarkSubjects()

// get all authors that have written books in the Childrens Books subject
const findChildrensAuthors = async () => {
    const childrenSubject = await models.subject.findOne({where:{name:'Childrens Books'}})
    const childrensAuthors = await childrenSubject.getAuthors()
    console.log(childrensAuthors);
}
findChildrensAuthors()
