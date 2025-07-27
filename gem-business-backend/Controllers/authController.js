const Auth = require("../Models/authModel.js");

const signup = async (req, res) => {
    const {userName,email,password,moNumber} =req.body;
    
    try{
        const user = await Auth.signup(userName,email,password,moNumber);
        res.status(201).json(user)
    }catch(err){
        res.status(400).json({error: err.message})
    }

}

module.exports = signup;