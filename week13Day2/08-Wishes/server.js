const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: ' ',
  database: 'wishes_db',
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }

  console.log(`connected as id ${connection.threadId}`);
});

app.get('/', (req, res) => {
    connection.query('SELECT * FROM wishes;', (err, data) => {
      if (err) throw err;
  
      // Test it
    //   console.log('Your Wishes: ', data);
  
      // Test it
      // return res.send(data);
  
      res.render('index', { wishes: data });
    });
});

app.post('/', (req, res) => {
    // Test it
    // console.log(`You sent, ${req.body.wish}`);
  
    // Test it
    // return res.send(`You sent, ${req.body.task}`);
  
    connection.query(
      'INSERT INTO wishes (wish) VALUES (?)',
      [req.body.wish],
      (err, result) => {
        if (err) throw err;
  
        res.redirect('/');
      }
    );
});


app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);