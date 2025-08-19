const Cart = require("../Models/cartModel");
const mongoose = require("mongoose");


const getCart = async (req, res) => {
    try {
        const userId = req.params.userId.toString();
        const cart = await Cart.findOne({ user: userId }).populate("items.product");
        console.log(cart);
        if (!cart) {
            return res.json({ items: [] })
        }

        const enrichedItems = cart.items.map((item) => {
            const product = item.product;

            if (!product) {
                return null;
            }

            return {
                _id: product._id,
                name: product.name,
                price: product.price,
                qty: item.qty
            };

        }).filter(Boolean);
        res.json({ items: enrichedItems })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const postCart = async (req, res) => {
    try {
        const { userId, items } = req.body;
        console.log(userId,items);

        if (!userId || !Array.isArray(items) || items.length === 0) {
            res.status(400).json({ message: "Invalid User ID or No Items in Cart" })
        }

        const userIdStr = userId.toString();
        const existingCart = await Cart.findOne({ user: userIdStr });

        if (existingCart) {
            existingCart.items = items;
            await existingCart.save();
            return res.status(200).json({ message: "cart updated", cart: existingCart })
        }

        const newCart = new Cart({ user: userIdStr, items });
        console.log("New Cart:", newCart);
        await newCart.save();

        res.status(201).json({ message: "cart saved", cart: newCart })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {getCart,postCart};