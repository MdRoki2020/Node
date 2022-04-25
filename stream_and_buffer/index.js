const http= require('http');
const fs= require('fs');

http.createServer((req,res)=>{
    const myReadStream=fs.createReadStream(`${__dirname}/bigdata.txt`,'utf8');
    myReadStream.pipe(res);
}).listen(3000);