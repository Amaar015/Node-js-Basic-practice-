

const http =require('http');
const fs=require('fs');

const fileContent=fs.readFileSync('index.html');

const server=http.createServer((req,res)=>{
         res.writeHead(200,{'Content-type':'text/html'});
         res.end(fileContent);
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