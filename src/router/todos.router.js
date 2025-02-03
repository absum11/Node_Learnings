const express = require('express');
const { getTodoController, createTodoController } = require('../controllers/todos');
const todosRouter = express.Router();


// create todo items\
todosRouter.post('/', createTodoController)

// get todo item
todosRouter.get('/:id', getTodoController)

module.exports = todosRouter