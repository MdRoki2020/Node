const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    
   if(req.url==='/'){
    let data=fs.readFileSync("home.html","utf8")
    res.end(data);
   }
   if(req.url==='/contact'){
    let data=fs.readFileSync("contact.html","utf8")
    res.end(data);
   }
   if(req.url==='/about'){
    let data=fs.readFileSync("about.html","utf8")
    res.end(data);
   }
   if(req.url==='/terms'){
    let data=fs.readFileSync("terms.html","utf8")
    res.end(data);
   }

}).listen(8080);