// importing express module
const express = require('express');

// create an instance or application of express
const app = express();

// configure the routes for the application
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to express application"
  })
})

// run the application
app.listen(3000, () => {
  console.log("server is running on http://localhost:3000")
})














// Normal way of creating server using http before express framework, Just for reference.
// // import the http module
// const http = require('http');

// // create a server
// // crateServer method takes a callback function
// // createServer returns an instance of the server
// const server = http.createServer((request, response) => {
//   response.end("Node App server created!!")
// });

// //listen on port 3000
// server.listen(3000,"127.0.0.1", () => {
//   console.log(`server is running on http://localhost:3000`)
// })
