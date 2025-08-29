const fs = require('fs');

setImmediate(() => console.log("Set Immediate"));

setTimeout(() => console.log("timer"), 0);

Promise.resolve("Promise resolved").then(console.log);

process.nextTick(() =>{
    process.nextTick(() => console.log("inner next tick"));
    console.log("next tick")
    Promise.resolve("inner promise").then(console.log);
    fs.readFile('./file.txt', 'utf8', (_, data) => {
        console.log('reading file inner next tick');
    })
})

fs.readFile("./file.txt", 'utf8', (_, data) => {
    console.log("File read done", data)
})
console.log("Last line of the code");