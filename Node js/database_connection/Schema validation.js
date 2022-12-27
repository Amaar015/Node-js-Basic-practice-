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
        required:true,
        // name must be unique in each documents
        unique:true,
        // if you want data in lower case you can use lovercase validation
        lowercase:true

    },
    job:{type:String,
         uppercase:true,
         trim:true      
    },
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


//  create document with async insertion

const Insert=async()=>{
    try{     
    const employee1=new School_employee({
        name:"                  Ali                                                ",
        job:"                     computer                       ",
        salary:35000,
        supervisor:"Chemistry Lab",
        status:"active",
        age:25,

            })
          
            const result=await School_employee.insertMany([employee1]);
            console.log(result);
            }catch(err){
            console.log(err);
            }
}
 Insert();

