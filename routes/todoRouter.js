// import express module
const express = require('express');
const { getAllTodos, getTodoById, createTodo,  } = require('../controllers/todoController');
const authRouter = require('./authRouter');

// create a router object to handle to-do related routes
const todoRouter = express.Router();

//use the route to handle requests to '/todos
todoRouter.get('/', (req, res) => {
    res.send("Hellooooooooooooo")
});

todoRouter.get('/auth', (re) =>{

});

todoRouter.get('/:id', getTodoById);

todoRouter.post('/', createTodo);

// todoRouter.put('/', up);
//export the router for use in the main application
module.exports = todoRouter;
