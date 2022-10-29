var http =require('http');

var server=http.createServer((req,res)=>{
                    res.end('hello from other side');

});

server.listen(8080,"127.0.0.1",()=>{
                    console.log('listening from the port no 8000')
})

// var http = require('http');

// http.createServer(function (req, res) {
//   // add a HTTP header:
// //   res.writeHead(200, {'Content-Type': 'text/html'});
// //   res.write('Hello World!');
//   res.end('hello world');
// }).listen(8080);
