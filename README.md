# Sequelize associations and validations

### Getting Started
1. Clone down this repo
1. Checkout your own branch
1. `npm install`: note that package.json already lists the packages we need in our dependencies section! this command will go and download all of them
1. Mac users, delete the username and password from config.json. Windows users, set them to your values.
1. `sequelize db:create`
1. `sequelize db:migrate`: note that migrations already exist!
1. `sequelize db:seed:all`

### Associations
You will need to add each of these associations into the various models files before you can do the prompts in `associations.js`. Remember that each of these relationships has two symmetrical ends in two different models!
1. A hometown has many authors, an author belongs to one hometown
1. A book belongs to one subject, a subject has many books
1. A book belongs to one author, an author has many books
1. A subject has many authors, an author has many subjects

Once you have these working, tackle the prompts in `associations.js`

### Validations
Take a look at `validations.js`. It contains several `models.author.create` statements. The first one contains only valid data, but all the other ones should raise an error. Your job is to add validations to the author model so that each `create` other than the first one should raise an error, and subsequently log the success message.

HINT: look at the catch blocks of each invalid creation. The error message that we want to see is a clue about which validation you need to put on that field!

Note: as you run `node validations.js` repeatedly, you will rack up a ton of valid Bookys from the first command. That is fine, do not worry about it. Though if you want to comment out that first command you can!

When you have all the validations working, you should just see this in your terminal:
```
#1 GOOD JOB!
#2 GOOD JOB!
#3 GOOD JOB!
#4 GOOD JOB!
#5 GOOD JOB!
#6 GOOD JOB!
```
Validation indeed! :D
