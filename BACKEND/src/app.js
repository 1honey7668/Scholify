const express = require("express");
const app = express();
const path = require("path");

const authRoutes = require("./routes/authRoutes");


require("dotenv").config({
  path: path.resolve(__dirname, "../.env")
});
const cookieparser = require("cookie-parser");
const cors = require("cors");

const connectDB = require("./config/db");


app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin : "https://localhost:5173" ,
    credentials : true
}));

connectDB();

app.use("/api/user" , authRoutes);

app.get("/" , (req , res)=>{
    res.send("hello world");
});

app.listen(process.env.PORT || 5000);
