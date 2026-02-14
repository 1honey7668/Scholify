
const express = require("express");
const router = express.Router();
const {registerUser} = require("../controllers/usercontroller");
const {userLogin} = require("../controllers/usercontroller")

router.post("/register" , registerUser);
router.post("/login" , userLogin);

module.exports = router;