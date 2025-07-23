// import express module
const express = require('express');
const { getAllTodos } = require('../controllers/todoController');

// create a router object to handle to-do related routes
const todoRouter = express.Router();

//use the route to handle requests to '/todos
todoRouter.get('/', getAllTodos);


//export the router for use in the main application
module.exports = todoRouter;