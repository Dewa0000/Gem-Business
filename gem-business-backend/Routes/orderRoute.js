const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middlewares/requireAuth");
const Checkout = require("../Models/checkoutModel");

// POST checkout
router.post("/", authMiddleware, async (req, res) => {
  const {
    orderItems,
    fullName,
    email,
    number,
    address,
    city,
    pincode,
    country,
    shippingMethod,
    paymentMethod,
    totalPrice,
  } = req.body;

  if (!orderItems || orderItems.length === 0) {
    return res.status(400).json({ error: "No order items found" });
  }

  try {
    const newCheckout = new Checkout({
      user: req.userId, // comes from authMiddleware
      orderItems,
      fullName,
      email,
      number,
      address,
      city,
      pincode,
      country,
      shippingMethod,
      paymentMethod,
      totalPrice,
    });

    const savedOrder = await newCheckout.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET user orders
router.get("/", authMiddleware, async (req, res) => {
  try {
    console.log("Fetching Orders for User:", req.userId);

    const orders = await Checkout.find({ user: req.userId }).sort({
      createdAt: -1,
    });

    const mappedOrders = orders.map((order) => ({
      id: order._id,
      orderItems: order.orderItems,
      fullName: order.fullName,
      email: order.email,
      number: order.number,
      address: order.address,
      city: order.city,
      pincode: order.pincode,
      country: order.country,
      shippingMethod: order.shippingMethod,
      paymentMethod: order.paymentMethod,
      totalPrice: order.totalPrice,
    }));

    res.status(200).json(mappedOrders);
  } catch (err) {
    console.error("Error in fetching order:", err.message);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
