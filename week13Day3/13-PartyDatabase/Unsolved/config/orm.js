const connection = require('./connections.js');

const orm = {
  select(colToSearch, tableInput) {
    const queryString = 'SELECT ?? FROM ??';
    connection.query(
      queryString,
      [colToSearch, tableInput],
      (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  },
  selectWhere(tableInput, colToSearch, valOfCol){
    const queryString = 'SELECT * FROM ?? WHERE ?? = ?';
    connection.query(
      queryString,
      [tableInput, colToSearch, valOfCol],
      (err, result) => {
        if (err) throw err;
        console.log(result);
      }
    );
  },
  leftJoin(whatToSelect, tableTwo, onTableOneCol, onTableTwoCol){
      let queryString = 'SELECT ?? FROM ?? AS tOne';
      queryString += 'LEFT JOIN ?? AS tTwo';
      queryString += 'ON tOne.?? = tTwo.??';

      console.log(queryString);

      connection.query(
        queryString,
        [whatToSelect, tableTwo, onTableOneCol, onTableTwoCol],
        (err, result) => {
          if (err) throw err;
          console.log(result);
        }
      );
  }
};

module.exports = orm;
