//console.log(app.get('env'));



const dotenv= require('dotenv');

dotenv.config({path :'./config.env'});
console.log(process.env);
const app=require('./app');

const port=process.env.PORT;