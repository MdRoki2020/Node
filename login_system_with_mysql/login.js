const mysql=require('mysql');
const express=require('express');
const res = require('express/lib/response');
const bodyparser=require('body-parser')
const encoder=bodyparser.urlencoded();

const app=express();


const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"fullstack"
})

con.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('its oky !');
    }
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post("/",encoder,(req,res)=>{
    var email=req.body.email;
    var password=req.body.password;
    con.query("SELECT * FROM `auth` WHERE `email`=? AND `password`=?",[email,password],(err,result,fields)=>{
        if(result.length>0){
            res.redirect("/dashboard")
        }else{
            res.redirect('/');
        }
        res.end();
    })
    
})

app.get("/dashboard",(req,res)=>{
    res.sendFile(__dirname+ "/dashboard.html")
})


app.listen(4000);