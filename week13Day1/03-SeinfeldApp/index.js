const express = require('express');
const mysql = require('mysql');

const app = express();

const PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    // Be sure to update with your own MySQL password!
    password: ' ',
    database: 'seinfeld',
});

connection.connect((err) => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
      return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

// app.get("/cast", function(req, res) {
//     connection.query('SELECT * FROM actors')
//     res.send("");
// });
  

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
