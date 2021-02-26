// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const connection = require('../config/connection.js');

// Routes
// =============================================================
module.exports = (app) => {
  //When I get this type of request to this address here is how to respond
  app.get('/api/all', function(err, result){
    const dbQuery = 'SELECT * FROM chirps';

    connection.query(dbQuery, function(err, result){
      if (err) throw err;
      res.json(result);
    })
  });

  app.post()
};
