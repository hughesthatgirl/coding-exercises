const db = require('../models');

// Routes
module.exports = (app) => {
  // GET route for getting all of the posts
  app.get('/api/posts', (req, res) => {
    db.Post.findAll({}).then((dbPost) => res.json(dbPost));
  });

  // Get route for returning posts of a specific category
  app.get('/api/posts/category/:category', (req, res) => {
    const category = req.params.category;
    db.Post.findAll({
      where: {
        category: category
      }
    }).then((dbPost) => res.json(dbPost));
  });

  // Get route for retrieving a single post
  app.get('/api/posts/:id', (req, res) => {
    const id = req.params.id;
    db.Post.findAll({
      where: {
        id: id
      }
    }).then((dbPost) => res.json(dbPost));
  });

  // POST route for saving a new post
  app.post('/api/posts', (req, res) => {
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    }).then((dbPost) => res.json(dbPost));

  });

  // DELETE route for deleting posts
  app.delete('/api/posts/:id', (req, res) => {
    // Add sequelize code to delete a post where the id is equal to req.params.id,
    // then return the result to the user using res.json
  });

  // PUT route for updating posts
  app.put('/api/posts', (req, res) => {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
  });
};
