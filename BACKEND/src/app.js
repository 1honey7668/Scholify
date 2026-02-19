const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");


const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");


require("dotenv").config({
  path: path.resolve(__dirname, "../.env")
});
const cookieparser = require("cookie-parser");

const connectDB = require("./config/db");


app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin : "http://localhost:5173" ,
    credentials : true
}));

connectDB();

app.use("/api/auth" , authRoutes);
app.use("/api/admin" , adminRoutes);

app.get("/" , (req , res)=>{
    res.send("hello world");
});

app.listen(process.env.PORT || 5000);
