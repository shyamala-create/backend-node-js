// import momgoose
const mongoose = require("mongoose");

//create a schema for todo model
const todoSchema = new mongoose.Schema({
    content: String,
    isCompleted: Boolean
});

//create a model and export it
module.exports = mongoose.model('Todo', todoSchema, 'todos')