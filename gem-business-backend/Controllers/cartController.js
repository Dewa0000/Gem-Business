const Cart = require("../Models/cartModel");

const postCart = async (req,res) => {
   try{
    const {userId,items} = req.body;

   if(!userId || !Array.isArray(items) || items.length === 0){
       res.status(400).json({message: "Invalid User ID or No Items in Cart"})
   }

   const userIdStr = userId.toString();
   const existingCart = await Cart.findOne({user : userIdStr});

   if(existingCart){
    existingCart.items = items;
    await existingCart.save();
    return res.status(200).json({message: "cart updated", cart: existingCart})
   }

   const newCart = new Cart({user: userIdStr,items});
   console.log("New Cart:", newCart);
   await newCart.save();

   res.status(201).json({message: "cart saved", cart: newCart})
   }catch(err){
    res.status(500).json({message: err.message})
   }
}

module.exports = postCart;