
const http=require('http');

var server=http.createServer((req,res)=>{
                    if(req.url='/'){
                    res.end('<h1>hello Amaar how are you bro</h1>');
                    } else if(req.url='/about'){
                                        res.end('<h1>Hello from the about side</h1>');
                    }
                    else if(req.url='/serve'){
                                        res.end('<h1>Hello from the Server side side</h1>');
                    }
                    else if(req.url='/Contact'){
                                        res.end('<h1>Hello from the about side</h1>');
                    }
                    else{
                                        res.end('<h1>Error 404 Page dose not exist</h1>');
                    }
})
server.listen(3000,'127.0.0.1', () =>{
                    console.log('http://127.0.0.1:3000');
})


var http = require('http');

http.createServer(function (req, res) {
  add a HTTP header:
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end('hello world');
}).listen(8080);


const http=require('http');
const fs=require('fs');
const hostname='127.0.0.1';
const port=3000;

const server=http.createServer((req,res)=>{
                    res.statusCode=200;
                    res.setHeader('Content-Type', 'Test/plain');
                    res.end('Hello Amaar How are you');

});
server.listen(port,hostname,()=>{
                    console.log(hostname,port);
});


var http =require('http');

var server=http.createServer((req,res)=>{
                    res.end('hello from other side');

});

server.listen(8080,"127.0.0.1",()=>{
                    console.log('listening from the port no 8000')
})
