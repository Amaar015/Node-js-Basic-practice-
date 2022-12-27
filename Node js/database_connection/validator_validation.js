const mongoose=require('mongoose');
const validator=require('validator')
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
         trim:true,
         minlenght:[2,'minimun greater than 2 letters'],
         maxlenght:10      
    },
    salary:Number,
    supervisor:String,
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                      throw new Error('Email is Invalid')
            }
        }
    },
    status:String,
    age:{
        type:Number,
        required:true,
        validate(value){
            if(value<0){
                throw new Error('Age can not in the negative value');
            }
        }
    }
//     validate:{
//         validator:function(value){
//                return value>0
//         },
//         message:"age can not in the negative"
//     }
// }
,
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
        name:"Aeeza",
        job:"Biology",
        salary:35000,
        supervisor:"Chemistry Lab",
        email:"razaamaargmail.com",
        status:"active",
        age:30,

            })
            const result=await School_employee.insertMany([employee1]);
            console.log(result);
            }catch(err){
            console.log(err);
            }
}
 Insert();

     const find=async()=>{
                //  const results1 =await School_employee.find({$and:[{age:25},{job:"Material"}]}).select({id:0});
                const results =await School_employee.find().select({id:0})
                .sort({name : 1});
                
                //   .sort({name : -1});
                // .countDocuments();

                // const results3 =await School_employee.find({$nor:[{age:25},{job:"Material"}]}).select({id:0});
                // const results =await School_employee.find({$not:[{age:25},{job:"Material"}]}).select({id:0});
             
                  console.log(results);
     }
    //  find();


    const UpdateData=async(ages)=>{
        try{
            // const result=await School_employee.deleteOne({job:'Software'})
            // const result=await School_employee.deleteMany({age:30})
            const result=await School_employee.findByIdAndDelete({age:ages})
            
            console.log(result);
        }catch(err){
               console.log(`The error occurs is ${err}`);
        }
          
    }
    // UpdateData(20);




    