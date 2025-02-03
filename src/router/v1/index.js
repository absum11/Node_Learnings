const express = require('express');
const todosRouter = require('../todos.router');
const v1Router = express.Router();


//health check api
v1Router.get('/health', (req, res) => {
    res.send('v1 server is healthy');
});

v1Router.use('/todos', todosRouter)



module.exports = v1Router