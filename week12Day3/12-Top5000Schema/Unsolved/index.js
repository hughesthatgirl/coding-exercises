const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: 'jhsqlpass1006!',
    database: 'top_songsDB',
});

const readSongs = () => {
    console.log('Selecting all songs...\n');
    connection.query('SELECT song FROM top5000 WHERE artist="The Beatles"', (err, res) => {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
};

const readMultiple = () => {
    console.log('Selecting artist...\n');
    connection.query('SELECT artist, COUNT(*) FROM top5000 GROUP BY artist HAVING COUNT(*) > 1', (err, res) => {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
};

const readRange = () => {
    console.log('Selecting top 10...\n');
    connection.query('SELECT song FROM top5000 WHERE position BETWEEN 1 AND 10', (err, res) => {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
};

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    readRange();
});