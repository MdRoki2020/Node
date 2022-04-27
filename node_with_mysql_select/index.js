const http=require('http');
const mysql=require('mysql');


let con=mysql.createConnection({host:"localhost",user:"root",password:"",database:"node_demo"});

con.connect((err)=>{
    if(err){
        console.log("connection failed")
    }else{
        selectData(con)
    }
});

    function selectData(con){
        let selectQuery="SELECT * FROM `students_list`";
        con.query(selectQuery,(err,data)=>{
            if(err){
                console.log("something went wrong");
            }else{
                console.log(data);
            }
        })
    }






