const fs = require('node:fs');

const a = 10;
const b = 20;

console.log("Hello world");

//async operation offload to libUV
fs.readFile('./file.txt', "utf8", (_, data) => {
    console.log("File data::", data)
});

setTimeout(() => {
    console.log("SetTimeOut will print ASAP") // this is 0 sec but actually the timer will start after the call stack is empty 
}, 0);

setTimeout(() => {
    console.log("SetTimeOut is printing after 3 seconds")
}, 3000);

const multiply = (a, b) =>{
    return a * b;
}

const result = multiply(a, b)

console.log(result);