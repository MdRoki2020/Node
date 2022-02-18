const http=require("http");
const fs=require("fs");

const PORT=3000;

http.createServer((req,res)=>{
    res.end("welcome to server");
})

ServiceWorkerRegistration.listen(PORT,()=>{
    console.log(`server is running`);
})