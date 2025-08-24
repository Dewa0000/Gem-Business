
const mongoose = require("mongoose");



const checkoutSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Auth",
    required: true,
  },
  orderItems: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      image: { type: String, required: false },

      price: { type: Number, required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String },
  pincode: { type: Number },
  country: { type: String, required: true },
  shippingMethod: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  totalPrice: { type: Number, required: true },
});

const Checkout = mongoose.model("Checkout", checkoutSchema);
module.exports = Checkout;