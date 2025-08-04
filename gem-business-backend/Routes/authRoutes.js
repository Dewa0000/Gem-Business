const express = require("express");
const router = express.Router();
const signup = require("../Controllers/authController.js")
const login = require("../Controllers/authController.js")

router.post("/auth/signup",signup)
router.post("/auth/login",login)

module.exports = router;