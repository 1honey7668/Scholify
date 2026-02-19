const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


 exports.registerUser = async(req , res) =>{
   
    try{
 const {username , name , password , email , role} = req.body;

    const existingUser = await userModel.findOne({email});

    if(!username || !email || !name || !password)
    {
       return  res.status(400).json({message : "all fields required"});
    }

    if(existingUser)
    {
        return res.status(409).json({message : "user already found"});
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password , salt);

    const newUser = await userModel.create({
       username ,
       name ,
       password : hashedPassword ,
       email ,
       role
    })

    const token = jwt.sign({email : newUser.email , userId : newUser._id , role : newUser.role},
        process.env.JWT_SECRET,
        { expiresIn : "1d"}
    );

    res.cookie("token" , token ,{
        httpOnly : true ,
        sameSite : "strict",
        secure : process.env.NODE_ENV === "production"
    });

      res.status(201).json({message : "user registered successfully" ,
        token , 
        user : {
            id : newUser._id,
            username : newUser.username,
            email : newUser.email,
            role : newUser.role
        }
      });
    }
    catch(e)
    {
        console.error("error in register user" , e);
        res.status(500).json({message : "server error"});
    } 
}


    exports.userLogin = async(req , res) => {
       try{
              const {email , password} = req.body;

              if(!email || !password){
                return res.status(400).json({message : "required all fields"});
              }

              const user = await userModel.findOne({email : email});

              if(!user){
                return res.status(404).json({message : "invalid credentials"});
              }

             const isMatch = await bcrypt.compare(password , user.password);

             if(!isMatch){
                return res.status(401).json({message : "invalid credentials"});
             }

             const token = await jwt.sign({email : email , userId : user._id , role : user.role } , 
                process.env.JWT_SECRET,
                {expiresIn : "1d"}
             )

             res.cookie("token" , token ,
                {httpOnly : true ,
                    sameSite : "strict" ,
                    secure : process.env.NODE_ENV === "production"
                })
                    console.log(token);
               return res.status(200).json({
               
                    message : "user loggedIn Successfully", token ,
                      user: {
                              id: user._id,
                              username: user.username,
                              email: user.email,
                              role: user.role
                            }
                })

       }
       catch(err)
       {
        console.error("inside catch" , err);
          res.status(500).json({message : "server errror"} );
       }
    }