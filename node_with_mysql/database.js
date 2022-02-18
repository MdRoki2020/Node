const {createPool} = require('mysql');

const pool=createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"node_test",
    connectionLimit:10
})

pool.query(`select * from users`,(err,result,fields)=>{
    if(err){
        return console.log(err)
    }
    return console.log(result)
})