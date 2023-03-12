const fs = require('fs').promises
const path = require('path')
// fs.readFile(path.join(__dirname,'file.txt'),'utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

const fileOps = async() =>{
    try{
        const data = await fs.readFile(path.join(__dirname,'file.txt'),'utf8')
        console.log(data)
        await fs.writeFile(path.join(__dirname,'file2.txt'),data)
        await fs.appendFile(path.join(__dirname,'file2.txt')," appended text")
        const d = await fs.readFile(path.join(__dirname,'file2.txt'),'utf8')
        console.log(d)
    }
    catch(err){
        console.error(err)
    }
}

fileOps()