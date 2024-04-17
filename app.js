/*const fs=require('fs');
let textIn=fs.readFileSync('./files/files.txt','utf-8');
fs.readFile('./Files/start.txt','utf-8',(error1,data1)=>{
    console.log(data1)
    fs.readFile(`./Files/${data1}.txt`,'utf-8',(error2,data2)=>{
        console.log(data2);
    })
})
console.log(textIn)*/

//how we are going to create a http server
//step1.CREATE THE SERVER
//step2.Start the SERVER

const http=require('http');
const server=http.createServer(
    (request,response)=>{
        response.end('hello from the server!');
        console.log('a new request recieved');

    }
);
server.listen(8000,'127.0.0.1',()=>{
    console.log("server is going to be started");
})