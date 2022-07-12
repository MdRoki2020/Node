const express = require("express");
const app = express();
const port = 5000;

app.set("view engine","hbs");
app.set("views","./view");
app.use(express.static(__dirname + "/public"))


//routing
app.get("/",(req,res)=>{
    res.render('index');
})

app.get("/add",(req,res)=>{
    res.render('add');
})

app.get("/search",(req,res)=>{
    res.render('search');
})

app.get("/update",(req,res)=>{
    res.render('update');
})

app.get("/delete",(req,res)=>{
    res.render('delete');
})

app.get("/view",(req,res)=>{
    res.render('view');
})

//create server
app.listen(port,(err)=>{
    if(err){
        throw err
    }else{
        console.log("server is running");
    }

})