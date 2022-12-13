

const http =require('http');
const fs=require('fs');
const url=require('url');
const fileContent=fs.readFileSync('index.html');
const fileAbout=fs.readFileSync('about.html');
const fileContact=fs.readFileSync('contact.html');

const server=http.createServer((req,res)=>{
          if(req.url=='/'){
         res.writeHead(200,{'Content-type':'text/html'});
         res.end(fileContent);
       }else if(req.url=='/about.html'){
         res.writeHead(200,{'Content-type':'text/html'});
         res.end(fileAbout);
       } else if(req.url=='/contact.html'){
         res.writeHead(200,{'Content-type':'text/html'});
         res.end(fileContact);} else{
              res.writeHead(404);
              res.end('404 error page dose not exist');
         }
})
server.listen(80,'127.0.0.1',()=>{
       console.log('listening on port 80');
})




















// const http =require('http');

// var sarvar =http.createServer((req,res)=>{
//     res.end('<h1>Hello from the about side</h1>');
//     res.end('<h2>How are you brother</h2>')
// })
// sarvar.listen(8000,'127.0.0.1');