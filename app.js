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

/**const http=require('http');
const server=http.createServer(
    (request,response)=>{
        response.end('hello from the server!');
        console.log('a new request recieved');

    }
);
server.listen(8000,'127.0.0.1',()=>{
    console.log("server is going to be started");
})**/

//lec 14
const fs=require('fs');
const http=require('http');
const html=fs.readFileSync('./Template/index.html','utf-8')

const server=http.createServer((request,response)=>{
    let path=request.url;
    if(path === '/' || path.toLocaleLowerCase() ==='/home')
    {
        response.writeHead(200,{
            'Content-type':'text/html',
            'my-header':'Hello world'
        });
        response.end(html.replace('{{%CONTENT%}}','You are in Home Page now'));
    }
    else if(path.toLocaleLowerCase() === '/about')
    {
        response.writeHead(200,{
            'Content-type':'text/html',
            'my-header':'Hello world'
        });
        response.end(html.replace('{{%CONTENT%}}','YOU ARE IN ABOUT page now'));
    }
    else if(path.toLocaleLowerCase()=== '/contact')
    {
        response.writeHead(200,{
            'Content-type':'text/html',
            'my-header':'Hello world'
        });
        response.end(html.replace('{{%CONTENT%}}','You are in contact page now'));
    }else{
        response.writeHead(404,{
            'Content-type':'text/html',
            'my-header':'Hello world'
        });
        response.end(html.replace('{{%CONTENT%}}','Error 404:page not found!'));
    }
    


});
server.listen(8000,'127.0.0.1',()=>{
      console.log('server has started');

});
