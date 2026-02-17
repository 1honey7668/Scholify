const Student = require("../models/student");
const User = require("../models/user");


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

       const newUser = await User.create({
        name ,
        username ,
        email ,
        password : hashedPassword ,
        role : "student"
       }) ;

       const newStudent = await Student.create({
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
        res.status(500).json({message : "server error" });

       }
};