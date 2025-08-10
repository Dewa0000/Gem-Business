const express = require("express");
const router = express.Router();
const postCart = require("../Controllers/cartController")

router.post("/", postCart )

module.exports = router;