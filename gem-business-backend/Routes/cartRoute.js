const express = require("express");
const router = express.Router();
const {getCart,postCart} = require("../Controllers/cartController")


router.post("/", postCart )
router.get("/:userId", getCart)

module.exports = router;