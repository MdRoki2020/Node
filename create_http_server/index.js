const http=require('http');
const myServer=http.createServer((req,res)=>{
    res.end("Hello i am your first server");
})

myServer.listen(3000,()=>{
    console.log("server is running at port 3000");
})