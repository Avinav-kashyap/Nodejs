const express=require('express');
let app=express();


app.get('/',(req,res)=>{
    res.status(200).json({message:'hello ,world',status:200});
    
})

app.post('/',()=>{
    
})

//create a server
const port=3000;
app.listen(port,()=>{
    console.log("server has started");
})