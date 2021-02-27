// Dependencies

// Grab the ORM from the config
const Todo = require('../models/todo');

// Routes
module.exports = (app) => {
  // GET route for getting all of the todos
  app.get('/api/todos', (req, res) => {
    Todo.getTodos((results) => res.json(results));
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post('/api/todos', (req, res) => {
    Todo.addTodo(req.body, (results) => res.json(results));
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete('/api/todos/:id', (req, res) => {
    Todo.deleteTodo(req.params.id, (results) => res.json(results));
  });

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put('/api/todos', (req, res) => {
    Todo.editTodo(req.body, (results) => res.json(results));
  });
};
