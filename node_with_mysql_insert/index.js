const mysql=require('mysql');

let con=mysql.createConnection({host:"localhost",user:"root",password:"",database:"node_demo"});

con.connect((err)=>{
    if(err){
        console.log('connection fail');
    }else{
        console.log('connection success');
        insertData(con)

    }
});

function insertData(con){
    let insertQuery="INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('Roki','56','ten','01717453205','Rangpur')";
    con.query(insertQuery,(err)=>{
        if(err){
            console.log('something went wrong');
        }else{
            console.log('data insert successfully');
        }
    })
}