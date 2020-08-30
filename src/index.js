'use strict'
const fs = require("fs");
const readline = require("readline");
const path = require("path");
const rwByline = require('./lib/readWriteFileByLine.js')

let input = fs.createReadStream("D:\\Download\\ATK018200827\\ATK018200827MIN.TXT");
const rl = readline.createInterface({
    input: input
});

rl.on("line", (line) => {
    console.log(`Line from file: ${line}`);
})

rl.on("close", (line)=> {
    console.log("At the end of the file!");
})

console.log("Hello World!")

// fs.readFile("D:\\Download\\ATK018200827\\ATK018200827MIN.TXT", (err, data) => {
//     if(err) throw err;
    
//     console.log(data.toString());

// })

exports.limit = function (num) {
    if (num < 0) {
      return 0;
    }
    return num;
  };