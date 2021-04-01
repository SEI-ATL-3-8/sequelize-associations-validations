// grab models
const models = require('./models');

// get all authors from Chicago
async function chicagoAuthors ()
{
    try {
        // grab Chicago
        const chicago = await models.hometown.findOne({ where: { name: 'Chicago, Illinois' } });
        console.log(chicago)
        // get authors
        const authors = await chicago.getAuthors();
        console.log(authors);
    } catch (error) {
        console.log(error.message);
    }
}
// chicagoAuthors();


// get Stephen King's hometown
async function kingsHometown ()
{
    try {
        // grab Stephen King
        const king = await models.author.findOne({ where: { name: 'Stephen King' } });
        // get hometown
        const ht = await king.getHometown();
        console.log(ht);
    } catch (error) {
        console.log(error.message);
    }
}
// kingsHometown();


// get all books by Mark Lutz
async function lutzBooks ()
{
    try {
        // grab Mark Lutz
        const lutz = await models.author.findOne({ where: { name: 'Mark Lutz' } });
        // get books
        const books = await lutz.getBooks();
        console.log(books);
    } catch (error) {
        console.log(error.message);
    }
}
// lutzBooks();


// get the author of Little Women
async function littleWomenAuthor ()
{
    try {
        // grab Little Women
        const lw = await models.book.findOne({ where: { title: 'Little Women' } });
        // get author
        const author = await lw.getAuthor();
        console.log(author);
    } catch (error) {
        console.log(error.message);
    }
}
// littleWomenAuthor();


// get all books in the Childrens Books subject
async function childrensBooks ()
{
    try {
        // grab children subject
        const children = await models.subject.findOne({ where: { name: 'Childrens Books' } });
        // get books
        const books = await children.getBooks();
        console.log(books);
    } catch (error) {
        console.log(error.message);
    }
}
// childrensBooks();


// Get the subject of the 2001 Space Oddyssey
async function oddysseySubject ()
{
    try {
        // grab 2001 Oddyssey
        const odd = await models.book.findOne({ where: { title: '2001: A Space Odyssey' } });
        // get subject
        const subject = await odd.getSubject();
        console.log(subject);
    } catch (error) {
        console.log(error.message);
    }
}
// oddysseySubject();


// get all subjects that Mark Lutz has written on
async function lutzSubjects ()
{
    try {
        // grab Mark Lutz
        const lutz = await models.author.findOne({ where: { name: 'Mark Lutz' } });
        // get subjects
        const subjects = await lutz.getSubjects();
        console.log(subjects);
    } catch (error) {
        console.log(error.message);
    }
}
// lutzSubjects();


// get all authors that have written books in the Childrens Books subject
async function childrensAuthors ()
{
    try {
        // grab children subject
        const children = await models.subject.findOne({ where: { name: 'Childrens Books' } });
        // get authors
        const authors = await children.getAuthors();
        console.log(authors);
    } catch (error) {
        console.log(error.message);
    }
}
// childrensAuthors();

