// importing express module
const express = require("express");
const logger = require("./utils/logger");
const errorRoute = require("./utils/errorRoute");
const todoRouter = require("./routes/todoRouter");
const authRouter = require("./routes/authRouter");

// create an instance or application of express
const app = express();

// middleware to parse json bodies.
app.use(express.json()); // 1st hitting we receives the request

// import the logger middleware
app.use(logger);

//configure the route of the application

app.use("/", (req, res) => {
  res.send("Helooo");
});

app.use(
  "/users",
  (req, res, next) => {
    // res.send("Response 1");
    next();
  },
  (req, res, next) => {
    console.log("Response 2");
    next(); // this is called middleware
  },
  (req, res, next) => {
    console.log("Response 3!!")
    //
    res.send("Response 3") // this is called route handlers
  }
);

//middleware and why we needed
//eg: authorisation. i want to tcheck whther the user is authorised or not then 
// i continue to route handler else send error response to handler

app.get('/admin/getAllUsers', (req, res, next) => {
    const token = "xyz";
    const isAuthorised = token === 'xyz';

    if(!isAuthorised){
        res.status(401).send("Unauthorised");
    } else {
        next(); //go to next route handler
    }
}, (req, res) => {
    res.send("All users"); // route handler 
});

app.use("/api/v1/todos", todoRouter);
app.use("/api/v1/auth", authRouter);

app.use(errorRoute);

module.exports = app;
