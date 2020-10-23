//path
const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

const os = require('os');

//Operating system
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory : '+totalMemory);
console.log('free memory '+freeMemory);

const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./',function(err,files){
    if(err) console.log('error',err);
    else console.log('REsult',files);
})