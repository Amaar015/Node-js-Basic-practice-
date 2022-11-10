const http=require('http');
const fs=require('fs');


const homeFile=fs.readFileSync('home.html', 'utf-8');
const server =http.createServer((req,res)=>{
                    if(req.url='/'){
                     requests(
                                     "https://api.openweathermap.org/data/2.5/weather?q=jamshoro&appid=73a5f15e70f49a268b2a9a8b869cdd5d"   
                     )
.on('data',(chunk)=>{
                    const obj=JSON.parse(chunk);
                    const arrdata=[obj];
                    console.log(arrdata);
})
.on('end',function(err){
                    if(err) 
                    return console.log('connection closed due to error',err);
                    console.log(end);
});

                    }
});

server.listen(80,'127.0.0.1');