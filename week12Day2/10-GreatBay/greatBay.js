const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: ' ',
  database: 'greatbay_db'
});

const questions = [
    {
        type: 'list',
        name: 'post_item',
        message: 'Would you like to post an item?',
        choices: ['Yes', 'No']
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter product ID'
    },
    {
        type: 'input',
        name: 'product_name',
        message: 'Enter Product Name'
    }
]

inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
});


// Connect to the DB
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    createProduct();
  });