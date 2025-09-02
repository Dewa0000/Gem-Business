const Auth = require("../Models/authModel.js");
const jwt = require("jsonwebtoken")

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: "3d"})
}

const signup = async (req, res) => {
    const {userName,email,password,moNumber} =req.body;
    
    try{
        const user = await Auth.signup(userName,email,password,moNumber);
        const token = createToken(user._id);
        res.status(201).json({
            user:{
                _id : user._id,
                userName: user.userName,
                email: user.email,
                moNumber: user.moNumber
            },token
        })
    }catch(err){
        res.status(400).json({error: err.message})
    }

}

const login = async (req,res) => {
    const {email,password} = req.body;

    try{
        const user = await Auth.login(email,password);
        const token = createToken(user._id);
        res.status(200).json({
            user: {
                _id: user.id,
                userName: user.userName,
                email: user.email,
                moNumber: user.moNumber
            },token
        }) 
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

const me = async (req,res) => {
    try{
        const user = await Auth.findById(req.userId).select("-password");
        if(!user){
            return res.status(404).json({error: "User not found"})
        }
        res.status(200).json(user);
    }catch(err){
        res.status(500).json({err: "Internal server error"});
}}
module.exports = {signup,login,me};