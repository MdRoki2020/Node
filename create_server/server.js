const http=require('http');

const myserver=http.createServer((req,res)=>{
    res.end('<h1>hello i am your first server</h1>');
})

myserver.listen(3000,()=>{
    console.log('server running at port 3000');
});
