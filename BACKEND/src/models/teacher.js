const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({

user : {
    type : String,
    ref : "user" ,
    required : true,
    unique : true
},

employeeId : {
    type : String ,
    required : true ,
    trim : true 
},

subject : {
    type : String ,
    required : true 

},

qualification : String ,

phone : String ,

address : String ,

status : {
    type : String ,
    enum : ["active" , "inactive"]
},

joiningDate : {
    type : Date ,
    default : Date.now
}

} , {timestamps : true});

module.exports = mongoose.model("teacherSchema",teacher);