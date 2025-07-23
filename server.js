const { default: mongoose } = require("mongoose");
const app = require("./app");
const {MONGODB_URI, PORT} = require("./utils/config")

console.log("connecting to the database....");
//connect to database
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to database");
    console.log("Starting the server");
    // run the application
    app.listen(PORT, () => {
      console.log("server is running on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.log("Error connecting database", err.message);
  });

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
