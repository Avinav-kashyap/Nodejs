const http=require('http');
const server=http.createServer((request,response)=>{
    let path=request.url;

    if(path=='/' || path.toLowerCase()==='/home')
    {
        response.end('you are in home page ');
    }
    else if(path.toLowerCase()==='/about')
    {
        response.end('you are in about page');
    }
    else if(path.toLocaleLowerCase()==='/contact')
    {
        response.end('u are in contact page');

    }
    else{
        response.end("page not found");
    }


});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Server has started!');
})