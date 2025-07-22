const logger = (req, res, next) => {
    console.log(`RequestMethod: ${req.method}`);
    console.log(`Request url: ${req.url}`);
    console.log(`Request Body: ${JSON.stringify(req.body)}`);

    console.log("-------------")
    // call the next middleware
    next();
}

module.exports = logger;