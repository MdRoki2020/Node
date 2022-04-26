const mysql=require('mysql');

let con=mysql.createConnection({host:"localhost",user:"root",password:"",database:"node_demo"});

con.connect((err)=>{
    if(err){
        console.log('connection fail');
    }else{
        console.log('connection success');
        deleteData(con)

    }
});

function deleteData(con){
    let deleteQuery="DELETE FROM `students_list` WHERE `id`= '9' ";
    con.query(deleteQuery,(err)=>{
        if(err){
            console.log('something went wrong');
        }else{
            console.log('data delete successfully');
        }
    })
}