const fs = require("fs")
const path = require('path')
console.log(path)
fs.readFile(path.join(__dirname,'file.txt'),'utf8',(err,data)=>{
    if (err) throw err;
    console.log(data)
})
console.log("started reading data")

process.on('uncaughtException',err=>{
    console.log('There was an error',err)
    process.exit(1)
})