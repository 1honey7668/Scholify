const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { user } = require("../models/user");


const isUserAuthenticate = async (req , res , next)=>{
  try{

       const token = req.headers.authorization?.split(" ")[1];
       
       if(!token)
       {
        return res.status(401).json({message : "Not authorized"});
       }

       const decoded = await jwt.verify(token , process.env.JWT_SECRET);

       const user = await user.findbyId(decoded.userId).select("-password");

       if(!user)
       {
        return res.status(401).json({message : "user not found"});
       }

       req.user = user;
       next();

  }
  catch(error)
  {
    return res.status(401).json({message : "server error" , error});
  }
}

export default isUserAuthenticate ;