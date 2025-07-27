const Auth = require("../Models/authModel.js");

const signup = async (req, res) => {
    const {userName,email,password,moNumber} =req.body;
    console.log(userName,email,password,moNumber);
    res.send("username:", userName)

}

module.exports = signup;