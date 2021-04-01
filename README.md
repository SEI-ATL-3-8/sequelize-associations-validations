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

Once you have these working, 

