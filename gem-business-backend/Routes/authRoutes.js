const express = require("express");
const router = express.Router();
const {login,signup, me} = require("../Controllers/authController.js");
const authMiddleware = require("../Middlewares/requireAuth.js");

router.post("/auth/signup",signup)
router.post("/auth/login",login)
router.get("/auth/me", authMiddleware, me)

module.exports = router;