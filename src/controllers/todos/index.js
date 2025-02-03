const { createTodoService, getTodoService } = require("../../services/todos");

const getTodoController = (req, res)=> {
    const todo = getTodoService(req.params.id);
    res.json(todo);
}

const createTodoController = (req, res)=> {
    console.log(req.body);
    const todo = createTodoService(req.body.todo);
    res.status(201).json(todo);
}

module.exports = {getTodoController, createTodoController}