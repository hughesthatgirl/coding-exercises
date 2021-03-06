const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port, if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  //In order for the connection to work, the DB must already exist
  password: ' ',
  database: 'ice_creamDB',
});

//Callback function
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  //closes the connection
  //want to do that when you're not actively working with the data
  //Saves memory
  connection.end();
});
