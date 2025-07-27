const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const validator = require("validator");
const schema = mongoose.Schema;

const authSchema = new schema({
    userName:{
        required: true,
        type: String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    moNumber: {
        type:Number,
        required:true,
    }
})

const Auth = mongoose.model("Auth", authSchema);
module.exports = Auth;