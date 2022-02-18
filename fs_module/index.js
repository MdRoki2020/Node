const fs=require('fs');
fs.appendFile('demo.txt',' PLSCR',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('successfully');
    }
})