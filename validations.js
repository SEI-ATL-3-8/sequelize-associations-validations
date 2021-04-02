const models = require('./models')

const validationExercise = async () => {
  // this one should create an author no problem!
  // it's just to have an example of what a fully valid author looks like
  // you can comment it out if you'd like
  // try {
  //   await models.author.create({
  //     name: 'Booky Bookington',
  //     age: 41,
  //     sex: 'M',
  //     email: 'booky@bookington.com',
  //     website: 'http://booky-bookington.com'
  //   })
  // } catch (error) {
  //   console.log(error);
  // }

  // #1
  try {
    await models.author.create({
      name: '',
      age: 41,
      sex: 'M',
      email: 'booky@bookington.com',
      website: 'http://booky-bookington.com'
    })
  } catch (error) {
    if (error.errors[0].message === 'Validation notEmpty on name failed') {
      console.log('#1 GOOD JOB!');
    } else {
      console.log(error);
    }
  }

  // #2
  try {
    await models.author.create({
      name: 'Booky Bookington',
      age: 'asdf',
      sex: 'M',
      email: 'booky@bookington.com',
      website: 'http://booky-bookington.com'
    })
  } catch (error) {
    if (error.errors[0].message === 'Validation isNumeric on age failed') {
      console.log('#2 GOOD JOB!');
    } else {
      console.log(error);
    }
  }

  // #3
  try {
    await models.author.create({
      name: 'Booky Bookington',
      age: -5,
      sex: 'M',
      email: 'booky@bookington.com',
      website: 'http://booky-bookington.com'
    })
  } catch (error) {
    if (error.errors[0].message === 'Validation min on age failed') {
      console.log('#3 GOOD JOB!');
    } else {
      console.log(error);
    }
  }

  // #4
  try {
    await models.author.create({
      name: 'Booky Bookington',
      age: 41,
      sex: 'X',
      email: 'booky@bookington.com',
      website: 'http://booky-bookington.com'
    })
  } catch (error) {
    if (error.errors[0].message === 'Validation isIn on sex failed') {
      console.log('#4 GOOD JOB!');
    } else {
      console.log(error);
    }
  }

  // #5
  try {
    await models.author.create({
      name: 'Booky Bookington',
      age: 41,
      sex: 'M',
      email: 'bookybookingtoncom',
      website: 'http://booky-bookington.com'
    })
  } catch (error) {
    if (error.errors[0].message === 'Validation isEmail on email failed') {
      console.log('#5 GOOD JOB!');
    } else {
      console.log(error);
    }
  }

  // #6
  try {
    await models.author.create({
      name: 'Booky Bookington',
      age: 41,
      sex: 'M',
      email: 'booky@bookington.com',
      website: 'http://booky-bookington'
    })
  } catch (error) {
    if (error.errors[0].message === 'Validation isUrl on website failed') {
      console.log('#6 GOOD JOB!');
    } else {
      console.log(error);
    }
  }
}

validationExercise()
