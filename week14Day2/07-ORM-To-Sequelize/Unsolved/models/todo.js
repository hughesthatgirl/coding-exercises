const Sequelize = require('sequelize');
const sequelize = require('../config/connection.js');

const Todo = sequelize.define('todo', {
    text: Sequelize.STRING,
    complete: Sequelize.BOOLEAN
})

// Sync model with DB
Todo.sync();

module.exports = Todo;