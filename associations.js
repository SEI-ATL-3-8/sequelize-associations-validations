const models = require('./models');
const hometown = require('./models/hometown');
// get all authors from Chicago

async function getAuthorsFromTown(name){
    let authors = await models.hometown.findOne({
        where: {
            name: name
        }
    })
    .then( town =>
        models.author.findAll({
            where: {
                hometownID: town.dataValues.id
            }
        }))
        return authors;
}
// getAuthorsFromTown('Chicago, Illinois').then(res => console.log(res));



// get Stephen King's hometown
async function getAuthorTown(name){
    let hometown = await models.author.findOne({
        where:{
            name: name
        }
    })
    .then( author => 
        models.hometown.findAll({
            where: {
                id : author.dataValues.id
            }
        }))
        return hometown;
}

// getAuthorTown('Stephen King').then(res => console.log(res));

// get all books by Mark Lutz

async function getAllBooks(name){
    let allbooks = await models.author.findOne({
        where:{
            name: name
        }
    }).then(author =>
        models.book.findAll({
            where: {
                authorId: author.dataValues.id
            }
        }))
        return allbooks;
}
// getAllBooks('Mark Lutz').then(res => console.log(res));

// get the author of Little Women

async function getAuthor(title){
    let author = await models.book.findOne({
       where:{ 
           title: title
       }
    }).then(myBook =>
        models.author.findOne({
            where: {
                id: myBook.dataValues.authorId
            }
        }))
        return author
}
// getAuthor('Little Women').then(res => console.log(res.dataValues.name))

// get all books in the Childrens Books subject

async function getBookBySubject(name){
    let books = await models.subject.findOne({
        where:{
            name: name
        }
    }).then(mySubject =>
        models.book.findAll({
            where: {
                subjectId: mySubject.dataValues.id
            }
        }))
        return books
}

// getBookBySubject('Childrens Books').then(res => console.log(res))


// Get the subject of the 2001: A Space Odyssey

async function getSubjectByBook(name){
    let subject = await models.book.findOne({
        where:{
            title: name
        }
    }).then(myBook =>
        models.subject.findOne({
            where: {
                id: myBook.dataValues.subjectId
            }
        }))
        return subject
}

// getSubjectByBook('2001: A Space Odyssey').then(res => console.log(res))

// get all subjects that Mark Lutz has written on

async function getSubjectsByAuthor(name){
    let subjects = await models.author.findOne({
        where:{
            name: name
        }
    }).then(myAuthor =>
        myAuthor.getSubjects()
    )
        return subjects
}
// getSubjectsByAuthor('Mark Lutz').then(res => console.log(res))
// get all authors that have written books in the Childrens Books subject

async function getAuthorsBySubject(subject_name){
    let myAuthors = await models.subject.findOne({
        where: {
            name: subject_name
        }
    }).then(mySubject =>
        mySubject.getAuthors()
    );

    return myAuthors;
}

// getAuthorsBySubject('Childrens Books').then(res => console.log(res));