const fs = require('fs');
const logger = (req, res, next) => {
    console.log(`RequestMethod: ${req.method}`);
    console.log(`Request url: ${req.url}`);
    console.log(`Request Body: ${JSON.stringify(req.body)}`);

    console.log("-------------");

    fs.writeFile('./logs/logs.txt', "backend logs", {flag: 'w'}, (err) => {
        if(err){
            console.error('Error writing to log file', err);
        }
        console.log('Log file written successfully')
    })
    // call the next middleware
    next();
}

module.exports = logger;