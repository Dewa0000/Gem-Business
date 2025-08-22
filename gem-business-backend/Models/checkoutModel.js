const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
   fullName: {required: true, type: String},
   
})