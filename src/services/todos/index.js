const { v4: uuidv4 } = require('uuid');

const todosDB = {}



const createTodoService = (todo)=>{
    const todoId = uuidv4();
    todosDB[todoId] = todo;
    return {
        id: todoId,
        todo
    }
}

const getTodoService = (id)=>{
    return {
        id,
        todo: todosDB[id]
    }
}

module.exports={createTodoService, getTodoService}