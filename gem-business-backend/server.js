const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./Routes/authRoutes.js");
const productRoutes = require("./Routes/productRoutes.js")
const orderRoutes = require("./Routes/orderRoute.js")
const cartRoutes = require("./Routes/cartRoute.js")

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/",authRoutes);
app.use("/products",productRoutes);
app.use("/checkout", orderRoutes);
app.use("/my-orders",orderRoutes);
app.use("/cart", cartRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});