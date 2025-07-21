// import the http module
const http = require('http');

// create a server
// crateServer method takes a callback function
// createServer returns an instance of the server
const server = http.createServer((request, response) => {
  response.end("Node Js is running!")
});

//listen on port 3000
server.listen(3000,"127.0.0.1", () => {
  console.log(`server is running on http://localhost:3000`)
})
