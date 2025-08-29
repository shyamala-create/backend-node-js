const fs = require('node:fs');

const a = 10;
const b = 20;

console.log("Hello world");

fs.readFileSync('./file.txt', "utf8");

setTimeout(() => {
    console.log("SetTimeOut is printing after 3 seconds")
}, 0);

const multiply = (a, b) =>{
    return a * b;
}

const result = multiply(a, b)

console.log(result);