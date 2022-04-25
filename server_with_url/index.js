const http=require('http');

http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("HOME");
        res.end();
    }
    else if(req.url==="/about"){
        res.write("ABOUT");
        res.end();
    }
    else{
        res.write("Not Found");
        res.end();
    } 

}).listen(3000)