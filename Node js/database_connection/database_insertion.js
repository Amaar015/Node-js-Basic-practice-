const mongoose=require('mongoose');
const url ="mongodb://0.0.0.0:27017/Customer";

mongoose.set('strictQuery', false);
mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('Connection creation successfull..'))
.catch((error)=>console.log( `${error} connection can't created`));

// create schema of database

const Employee_Schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    job:String,
    salary:Number,
    supervisor:String,
    status:String,
    age:Number,
    hire_date:{
        type:Date,
        default:Date.now
    }
})


// Create collection in customer database
 const School_employee=new mongoose.model("School",Employee_Schema);

// Insertion into schools

const gbhs4=new School_employee({
    name:"Minhal Abass",
    job:"Construction",
    salary:125000,
    supervisor:"sindhu river",
    status:"Active",
    age:26
})

gbhs4.save();










// var mogose = require('mongoose');
// var url = "mongodb://localhost:27017/customer";

// mogose.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });


// const mongoose=require('mongoose');
// const url="mongodb://localhost/infodata";
// const path="mongodb://localhost:27017/info";
// mongoose.connect(path,{useNewUrlParser:true , useUnifiedTopology:true,strictQuery:true});

// var db=mongoose.connection;
// db.on('error',console.error.bind(console, 'connection not established'))
// db.once('open',()=>{
//          console.log('connection establiished ...');
// });
// var MongoClient = require('mongodb').MongoClient;
