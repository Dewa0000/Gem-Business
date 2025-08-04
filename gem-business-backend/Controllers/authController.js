const Auth = require("../Models/authModel.js");

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

module.exports = {signup,login};