//console.log(app.get('env'));


const mongoose= require('mongoose');
const dotenv= require('dotenv');

dotenv.config({path :'./config.env'});
console.log(process.env);


const app=require('./app');
//connection with mongoose
mongoose.connect(process.env.CONN_STR,{
    useNewUrlParser: true
}).then((conn)=>{
     console.log(conn);
     console.log('DB Connection Successful');

}).catch((error)=>{
    console.log('Some error has occured');

});

const port=process.env.PORT;