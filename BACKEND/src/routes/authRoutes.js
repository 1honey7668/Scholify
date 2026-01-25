
const express = require("express");
const router = express.Router();
const {registerUser} = require("../controllers/usercontroller");

router.post("/registerUser" , registerUser);

module.exports = router;