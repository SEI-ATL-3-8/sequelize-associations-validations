const models = require('./models')
const book = require('./models/book')

// get all authors from Chicago

const chicagoAuthors = async () => {
  const chicago = await models.hometown.findOne({
    where: {
      name: 'Chicago, Illinois'
    }
  })
  // console.log(chicago)
  const allAuthors = await chicago.getAuthors()
  console.log(allAuthors)
}
chicagoAuthors()

// get Stephen King's hometown

const kingsFrom = async () => {
  const mrKing = await models.author.findOne({
    where: {
      name: 'Stephen King'
    }
  })
  // console.log(mrKing)
  const address = await mrKing.getHometown()
  console.log(address)
}
kingsFrom()


// get all books by Mark Lutz

const lutzBookz = async () => {
  const lutz = await models.author.findOne({
    where: {
      name: 'Mark Lutz'
    }
  })
  // console.log(lutz)
  const markBookz = await lutz.getBooks()
  console.log(markBookz)
}
lutzBookz()

// // get the author of Little Women

const lilWomen = async () => {
  const bookIs = await models.book.findOne({
    where: {
      title: 'Little Women'
    }
  })
  // console.log(bookIs)
  const authorIs = await bookIs.getAuthor()
  console.log(authorIs)
}
lilWomen()

// // get all books in the Childrens Books subject

const kidzBooks = async () => {
  const topicIs = await models.subject.findOne({
    where: {
      name: 'Childrens Books'
    }
  })
  // console.log(topicIs)
  const booksAre = await topicIs.getBooks()
  console.log(booksAre)
}
kidzBooks()

// // Get the subject of the 2001 Space Oddyssey

const whatSubj = async () => {
  const itsABook = await models.book.findOne({
    where: {
      title: '2001: A Space Odyssey'
    }
  })
  // console.log(itsABook)
  const subjIs = await itsABook.getSubject()
  console.log(subjIs)
}
whatSubj()

// // get all subjects that Mark Lutz has written on

const allSubj = async () => {
  const markyMark = await models.author.findOne({
    where: {
      name: 'Mark Lutz'
    }
  })
  // console.log(markyMark)
  const allHisSubs = await markyMark.getSubjects()
  console.log(allHisSubs)
}
allSubj()

// // get all authors that have written books in the Childrens Books subject

const allOfTheAuthors = async () => {
  const topicIs = await models.subject.findOne({
    where: {
      name: 'Childrens Books'
    }
  })
  // console.log(topicIs)
  const authorsAre = await topicIs.getAuthors()
  console.log(authorsAre)
}
allOfTheAuthors()