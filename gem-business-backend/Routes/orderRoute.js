const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middlewares/requireAuth");
const Checkout = require("../Models/checkoutModel");


router.post("/", authMiddleware, async (req,res) => {
    const {orderItems,shippingMethod,paymentMethod,totalPrice} = req.body;

    if(!orderItems || orderItems.length === 0){
        res.status(401).json({err:"No order found"})
    }

    try{
        const newCheckout = new Checkout({
            user: req.userId,
            orderItems,
            shippingMethod,
            paymentMethod,
            totalPrice
        })

        const savedOrder = await newCheckout.save();
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

        const orders = await Order.find({user: req.userId}).sort({createdAt: -1});
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