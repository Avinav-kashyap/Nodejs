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
let products=JSON.parse(fs.readFileSync('./Data/products.json','utf-8'))
let productListHtml=fs.readFileSync('./Template/product-list.html','utf-8')
let productHtmlArray=products.map((prod)=>{
    let output=productListHtml.replace('{{%IMAGE%}}',prod.productImage);
    output=output.replace('{{%NAME%}}',prod.name);
    output=output.replace('{{%MODELNAMES%}}',prod.modeName);
    output=output.replace('{{%MODELNO%}}',prod.modelNumber);
    output=output.replace('{{%SIZE%}}',prod.size);
    output=output.replace('{{%CAMERA%}}',prod.camera);
    output=output.replace('{{%PRICE%}}',prod.price);
    output=output.replace('{{%COLOR%}}',prod.color);

    return output;

})

const server=http.createServer((request,response)=>{
    let path=request.url;
    if(path === '/' || path.toLocaleLowerCase() ==='/home')
    {
        response.writeHead(200,{
            'Content-type':'text/html',
            'my-header':'Hello world'
        });
        response.end(html.replace('{{%CONTENT%}}','u r in home page'));
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
    }
    else if(path.toLocaleLowerCase() === '/products')
    {
        let productResponseHtml=html.replace('{{%CONTENT%}}',productHtmlArray.join(','));
        response.writeHead(200,{
            'Content-type':'text/html'});
        response.end(productResponseHtml)
            
        fs.readFile('./Data/products.json','utf-8',(error,data)=>{
            let products=JSON.parse(data)
            response.end(data);

        }

        )
    }
        else{
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
