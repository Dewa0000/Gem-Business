const mongoose = require("mongoose");
const schema = mongoose.Schema;
const validator = require("validator");
const bcryptjs = require("bcryptjs");

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
        type:String,
        required:true,
    }
})

authSchema.statics.signup = async function(userName,email,password,moNumber){
    if(!userName || !email || !password || !moNumber){
        throw Error("All fields are required");
    }
    if(!validator.isEmail(email)){
        throw Error("Invalid email");
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Password is not strong enough");
    }
    const exists = await this.findOne({email});
    if(exists){
        throw Error("Email already in use");
    }
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(password,salt);
    const user = await this.create({
        userName,
        email,
        moNumber,
        password:hash
    });    
    return user;
}   

authSchema.statics.login = async function(email,password){
    if(!email || !password){
        throw Error("All fields must be filled")
    }

    const user = await this.findOne({email})

    if(!user){
        throw Error("Incorrect Mail")
    }

    const match = await bcryptjs.compare(password,user.password)

    if(!match){
        throw Error("Incorrect Password")
    }

    return user;
}



const Auth = mongoose.model("Auth", authSchema);
module.exports = Auth;