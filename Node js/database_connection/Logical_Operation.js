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


//  create document with async insertion

const Insert=async()=>{
    try{     
    const employee1=new School_employee({
        name:"Shahbaz Ali",
        job:"Material",
        salary:35000,
        supervisor:"Chemistry Lab",
        status:"Not active",
        age:35,

            })
            const employee2=new School_employee({
                name:"Ali Mehran",
                job:"workshop",
                salary:20000,
                supervisor:"Chemistry Lab",
                status:"Retired",
                age:25,
        
                    })
                    const employee3=new School_employee({
                        name:"Niaz Hussain",
                        job:"Workshop",
                        salary:40000,
                        supervisor:"Mining game",
                        status:"Active",
                        age:20,
                
                            })

                            const employee4=new School_employee({
                                name:"Sibtain",
                                job:"Material",
                                salary:30000,
                                supervisor:"Chemistry Lab",
                                status:"Active",
                                age:30,
                        
                                    })
            const result=await School_employee.insertMany([employee1,employee2,employee3,employee4]);
            console.log(result);
            }catch(err){
            console.log(err);
            }
}
//  Insert();

     const find=async()=>{
                 const results1 =await School_employee.find({$and:[{age:25},{job:"Material"}]}).select({id:0});
                const results2 =await School_employee.find({$or:[{age:25},{job:"Material"}]}).select({id:0});
                const results3 =await School_employee.find({$nor:[{age:25},{job:"Material"}]}).select({id:0});
                // const results =await School_employee.find({$not:[{age:25},{job:"Material"}]}).select({id:0});
             
                  console.log(results);
     }
     find();