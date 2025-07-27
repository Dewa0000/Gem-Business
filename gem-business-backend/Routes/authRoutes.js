const express = require("express");
const router = express.Router();
const signup = require("../Controllers/authController.js")

router.post("auth/signup",signup)

module.exports = router;