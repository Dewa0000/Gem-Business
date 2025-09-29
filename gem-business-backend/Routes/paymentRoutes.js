// routes/paymentRoutes.js
const express = require("express");
const { paymentController } = require("../Controllers/paymentController.js");

const router = express.Router();

router.post("/payment-order", paymentController);

module.exports = router;
