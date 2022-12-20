const http=require('http');
const fs=require('fs');
var requests=require('requests');

const homeFile=fs.readFileSync('home.html', 'utf-8');
const replaceVal=(tempVal, OrignalVal)=>{
    let temprature=tempVal.replace('{%tempVal%}',OrignalVal.main.temp);
    temprature=temprature.replace('{%tempMin%}',OrignalVal.main.temp_min);
    temprature=temprature.replace('{%tempMax%}',OrignalVal.main.temp_max);
    temprature=temprature.replace('{%location%}',OrignalVal.name);
    temprature=temprature.replace('{%Contry%}',OrignalVal.sys.country);
    temprature=temprature.replace('{%tempStatus%}',OrignalVal.weather[0].main);
    
    return temprature;
}
const server =http.createServer((req,res)=>{
                    if(req.url='/'){
                     requests(
                                    //  "https://api.openweathermap.org/data/2.5/weather?q=jamshoro&appid=73a5f15e70f49a268b2a9a8b869cdd5d"
                                     'https://api.openweathermap.org/data/2.5/weather?q=jamshoro&units=metric&appid=73a5f15e70f49a268b2a9a8b869cdd5d'   
                     )
.on('data',(chunk)=>{
                   const obj=JSON.parse(chunk);
                    const arrData=[obj];
                    const RealTimedata=arrData.map((val)=>replaceVal(homeFile,val)).join("");
                    res.write(RealTimedata);
                    // console.log(RealTimedata);
})
.on('end',(err)=>{
                    if(err) 
                    return console.log('connection closed due to error',err);
                //    res.end();
                 res.end();
                });

                    }
});

server.listen(8000,'127.0.0.1');