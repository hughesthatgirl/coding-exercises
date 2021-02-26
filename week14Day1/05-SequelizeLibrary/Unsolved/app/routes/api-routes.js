// Dependencies
const Book = require('../models/book.js');

// Routes
module.exports = (app) => {
  // Add sequelize code to get all books and return them as JSON
  app.get('/api/all', (req, res) => {
    Book.findAll({}).then((results) => res.json(results));
  });

  // Add sequelize code to get a specific book and return it as JSON
  app.get('/api/:book', (req, res) => {
    const title = req.params.book;

    if (title){
      Book.findAll({
        where: {
          title: title
        }
      }).then((results) => res.json(results));
    }
  });

  // Add sequelize code to get all books of a specific genre and return them as JSON
  app.get('/api/genre/:genre', (req, res) => {
    const genre = req.params.genre;

    if (genre){
      Book.findAll({
        where: {
          genre: genre
        }
      }).then((results) => res.json(results));
    }
  });

  // Add sequelize code to get all books from a specific author and return them as JSON
  app.get('/api/author/:author', (req, res) => {
    const author = req.params.author;

    if (author){
      Book.findAll({
        where: {
          author: author
        }
      }).then((results) => res.json(results));
    }
  });

  // Add sequelize code to get all "long" books (more than 150 pages) and return them as JSON
  app.get('/api/books/long', (req, res) => {
    Book.findAll({
      where: {
        pages: {
          [Op.gt]: 150
        }
      }
    }).then((results) => res.json(results));
  });

  // Add sequelize code to get all "short" books (150 pages or less) and return them as JSON
  app.get('/api/books/short', (req, res) => {
    Book.findAll({
      where: {
        pages: {
          [Op.lt]: 150
        }
      }
    }).then((results) => res.json(results));
  });

  // Add sequelize code to create a book
  app.post('/api/new', (req, res) => {
    
  });

  // Add sequelize code to delete a book
  app.delete('/api/book/:id', (req, res) => {});
};
