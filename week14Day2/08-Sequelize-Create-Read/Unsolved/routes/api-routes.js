// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
const db = require('../models');

// Routes
// =============================================================
module.exports = function (app) {
  // GET route for getting all of the todos
  app.get('/api/todos', (req, res) => {
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
    db.Todo.findAll({}).then(function(dbTodo){
      res.json(dbTodo)
    })
  });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post('/api/todos', (req, res) => {
    // Write code here to create a new todo and save it to the database
    // and then res.json back the new todo to the user
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbTodo){
      res.json(dbTodo);
    })
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete('/api/todos/:id', (req, res) => {
    const id = req.params.id;
    db.Todo.destroy({
      where: {
        id: id
      }
    }).then(function(){res.end()})
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put('/api/todos', (req, res) {
    db.Todo({})
  });
};
