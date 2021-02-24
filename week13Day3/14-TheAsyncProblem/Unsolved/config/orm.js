var connection = require("../config/connection.js");

var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol, callback) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) callback(err, null);
      
      callback(result);
    });
  }
};

module.exports = orm;
