const express = require("express");
const router = express.Router();
const Product = require("../Models/productModel");

router.get("/" , async (req,res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }catch(err){
        res.status(400).json({error: err.message});
    }
})

router.get("/:id", async (req,res) => {
    try{
        const product = await Product.findById(req.params.id);
        if(!product) return console.log("No Product Found")
            res.status(400).json(product);
    }catch(err){
        res.status(200).json({error: err.message})
    }
})

module.exports = router;