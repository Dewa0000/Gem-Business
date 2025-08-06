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

router.get("/", authMiddleware, async (req,res) => {
    try{
        console.log("Fetching Orders for User:", req.userId)
        const allOrder = await Order.find({});
        console.log("All Orders:",allOrder);

        const orders = await Order.find({userId: req.userId}).sort({createdAt: -1});
        const mappedOrders = orders.map((order) => 
        ({
            id: order._id,
            orderItems: order.orderItems,
            shippingAddress: order.shippingAddress,
            paymentMethod: order.paymentMethod,
            totalPrice: order.totalPrice,
            isPaid: order.isPaid
        })
        )
        res.status(200).json(mappedOrders);
    }catch(err){
        console.error("Error in fetching order:", err.message);
        res.status(400).json({error: err.message})
    }
} )

module.exports = router;