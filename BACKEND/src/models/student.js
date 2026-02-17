const mongoose = require("mongoose");
const user = require("./user");

const studentSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true,
        unique : true
    },

    rollNumber : {
        type : String ,
        required : true,
        trim : true
    },

    className : {
        type : String,
        required : true

    },

    section : {
        type : String 
    },

    dateOfBirth : {
      type :  Date
    },

    gender : {
        type : String ,
        enum : ["male" , "female" , "other"]
    },

    phone : String ,

    address : String ,

    guardianName : String ,

    guardianPhone : String ,

    admissionDate : {
        type : Date ,
        default : Date.now 
    },

    status : {
        type : String ,
        enum : ["active" , "inactive"]
    },
    
},
  {timestamps : true}
);

module.export = mongoose.model("student" , studentSchema);