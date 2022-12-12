const http=require('http');
const fs=require('fs');
var requests=require('requests');

const homeFile=fs.readFileSync('home.html', 'utf-8');
// const replaceVal=(tempVal, OrignalVal)=>{
    // let temprature=tempVal.replace('{%tempVal%}',OrignalVal.main.temp);
    // temprature=temprature.replace('{%tempMin%}',OrignalVal.main.temp_min);
    // temprature=temprature.replace('{%tempMax%}',OrignalVal.main.temp_max);
    // temprature=temprature.replace('{%location%}',OrignalVal.name);
    // temprature=temprature.replace('{%Contry%}',OrignalVal.sys.country);
    // return temprature;
// }
const server =http.createServer((req,res)=>{
                    if(req.url='/'){
                     requests(
                                     "https://api.openweathermap.org/data/2.5/weather?q=jamshoro&appid=73a5f15e70f49a268b2a9a8b869cdd5d"   
                     )
.on('data',(chunk)=>{
    // console.log(chunk);
                    const obj=JSON.parse(chunk);
                    const arrdata=[obj];
                    console.log(arrdata);
                    // const RealTimedata=arrdata.map((val)=>{
                        // replaceVal(homeFile,val);
                    // })
                    // console.log(RealTimedata);
})
.on('end',function(err){
                    if(err) 
                    return console.log('connection closed due to error',err);
                    console.log(end);
});

                    }
});

server.listen(5000,'127.0.0.1');