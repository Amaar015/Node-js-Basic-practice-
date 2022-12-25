const mongoose=require('mongoose');
const url ="mongodb://0.0.0.0:27017/Customer";

mongoose.set('strictQuery', false);
mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('Connection creation successfull..'))
.catch((error)=>console.log( `${error} connection can't created`));

// create schema of database
// schema define the structure of the database document
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
