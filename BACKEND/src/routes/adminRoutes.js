const express = require("express");
const router = express.Router();
const {createStudent} = require("../controllers/adminController");
const { default: isAuthorize } = require("../middleware/rolemiddleware");
const { default: isUserAuthenticate } = require("../middleware/authmiddleware");
const {getAllStudent , getStudentById ,deleteStudent } = require("../controllers/adminController");

router.post("/createStudent" , isUserAuthenticate , isAuthorize("admin") , createStudent);
router.get("/allStudents" ,isUserAuthenticate , isAuthorize("admin" , "teacher") , getAllStudent);
router.get("/student/:id" ,isUserAuthenticate , isAuthorize("admin" , "teacher") , getStudentById);
router.delete("/deletestudent/:id" ,isUserAuthenticate , isAuthorize("admin") , deleteStudent);






module.exports = router;