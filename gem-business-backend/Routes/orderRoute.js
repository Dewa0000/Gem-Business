const express = require("express");
const router = express.Router();
const Order = require("../Models/orderModel");
const authMiddleware = require("../Middlewares/requireAuth");


router.post("/", authMiddleware, async (req,res) => {
    const {orderItems,shippingAddress,paymentMethod,totalPrice} = req.body;

    if(!orderItems || orderItems.length === 0){
        res.status(401).json({err:"No order found"})
    }

    try{
        const newOrder = new Order({
            user: req.userId,
            orderItems,
            shippingAddress,
            paymentMethod,
            totalPrice
        })

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    }catch(err){
        res.status(500).json({error: err.message})
    }
})

module.exports = router;