const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.readFile('home.html',(err,data)=>{
            res.writeHead('200',{'Contain-type':'text/html'});
            res.write(data);
            res.end()
        })
    }

}).listen(3000);