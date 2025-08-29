const express = require("express");

const app = express.json();

app.use('/', (req, res) => {
    res.send("Hello /");
})

app.use('/hello', (req, res) => {
    res.send("hello data")
})
