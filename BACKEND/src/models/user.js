const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   username : {
    type : String,
    required : true ,
    unique : true ,
    trim : true
   },

   name : {
    type : String ,
    required : true ,

   },

   email : {
    type : String ,
    required : true ,
    unique : true ,
    lowercase : true
   },

   password : {
    type : String ,
    
    minlength : 6
   },

   role : {
    type : String ,
    enum : ["student" , "teacher" , "admin"],
    default : "student"
   },

   createdAt : {
    type : Date ,
    dafault : Date.now()
   }
})

module.exports = mongoose.model("user" , userSchema);