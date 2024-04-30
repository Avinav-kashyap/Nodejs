const express=require('express');
const fs=require('fs');
const morgan=require('morgan');

const moviesRouter =require('./Routes/moviesRoutes');


let app=express();




const logger=function(req,res,next){
    console.log('Custom middleware called');
    next();

}



app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('./public'))
app.use(logger);
app.use((req,res,next)=>{
    req.requestedAt = new Date().toISOString();
    next();

})





app.use('/api/v1/movies',moviesRouter)
//create a server
const port=3000;
app.listen(port,()=>{
    console.log("server has started");
})

module.exports=app;