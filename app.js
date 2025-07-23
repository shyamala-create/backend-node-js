// importing express module
const express = require('express');
const logger = require('./utils/logger');
const errorRoute = require('./utils/errorRoute');
const todoRouter = require('./routes/todoRouter');

// create an instance or application of express
const app = express();

// middleware to parse json bodies.
app.use(express.json()); // 1st hitting we receives the request

// import the logger middleware
app.use(logger);

//configure the route of the application
app.use('/api/v1/todos', todoRouter);
app.use(errorRoute);

module.exports = app;