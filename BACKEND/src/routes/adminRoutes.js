const express = require("express");
const router = express.Router();
const {createStudent} = require("../controllers/adminController");
const { default: isAuthorize } = require("../middleware/rolemiddleware");
const { default: isUserAuthenticate } = require("../middleware/authmiddleware");

router.post("/create-student" , isUserAuthenticate , isAuthorize("admin") , createStudent);




module.exports = router;