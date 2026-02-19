const Student = require("../models/student");
const User = require("../models/user");
const bcrypt = require("bcrypt");


exports.createStudent = async (req , res) =>{
     let  newUser = null;
    try{
        const {name ,
               email,
               username ,
               password ,
               section ,
               className ,
               rollNumber ,
               address ,
               phone ,
               guardianPhone,
               guardianName ,
               dateOfBirth ,
               gender 

        } = req.body;

       const existingUser = await User.findOne({email});

       if(existingUser){
         return res.status(409).json({message : "user already existes"});
       }

       const salt = await bcrypt.genSalt(10);

       const hashedPassword = await bcrypt.hash(password , salt);

        newUser = await User.create({
        name ,
        username ,
        email ,
        password : hashedPassword ,
        role : "student"
       }) ;
             const  newStudent = await Student.create({
               user : newUser._id,
               section ,
               className ,
               rollNumber ,
               address ,
               phone ,
               guardianPhone,
               guardianName ,
               dateOfBirth ,
               gender 
       })

       res.status(201).json({message : "student created successfully" ,
                               student : newStudent 
       })}
       catch(error){


        if(newUser)
        {
            await User.findByIdAndDelete(newUser._id);
        }


        console.error(error);
        res.status(500).json({message : "server error" ,error });

       }
};

exports.getAllStudent = async(req , res) =>{
  try{
        
      const Students = await Student.find()
                                              .select("className  gender  age rollNumber section")
                                              .populate("user" , "name  email").sort({createdAt : -1});

          return res.status(200).json({
             count : Students.length,
             Students
          })

  }
  catch(error)
  {
      console.log(error);

     return res.status(500).json({
      message : "server error"
     })
  }
}

exports.getStudentById = async(req , res) =>{
  try{
         const {id} = req.params;

         const student = await Student.findById(id).
         select("className  rollNumber  gender  age  phone  guardianPhone section  guardianName ")
         .populate("user" , "name  username email role");

         if(!student)
         {
          return res.status(404).json({message : "Student not found"});
         }

         return res.status(200).json({student});
  }
  catch(error)
  {
     console.error("error getting student" , error);
     return res.status(500).json({
      message : "server error" ,
      error
     });
  }
}

exports.deleteStudent = async(req , res)=>{

  try{
         const {id} = req.params;

         const student = await Student.findById(id);

         if(!student)
         {
          return res.status(404).json({message : "student not found"})
         }
         
          await User.findByIdAndDelete(student.user)
          await Student.findByIdAndDelete(id);

         return res.status(200).json({
          message : "student deleted successfully",

         })
  }
  catch(error)
  {
    console.error("error in deleting student" , error);

    return res.status(500).json({
      message : "server error" , error
    })
  }

}