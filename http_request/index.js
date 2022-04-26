const http=require('http');

http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead('200',{'contain-type':'text/html'})
        res.write('<h1>This Is Our Home Page</h1>')
        res.end()
    }
    else if(req.url==='/about'){
        res.writeHead('200',{'contain-type':'text/html'})
        res.write('<h1>This Is Our About Page</h1>')
        res.end()
    }
    else if(req.url==='/contact'){
        res.writeHead('200',{'contain-type':'text/html'})
        res.write('<h1>This Is Our Contact Page</h1>')
        res.end()
    }
    else{
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
}).listen(3000);