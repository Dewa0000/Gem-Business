const Blog = require("../Models/blogModel");
const mongoose = require("mongoose");

const getBlogs = async (req, res) => {
    const {category} = req.query;

    try{
        const filter = category ? {category : category.toLowerCase()} : {};
        const blogs = await Blog.find(filter).sort({createdAt: -1});
        res.status(200).json({blogs});        
    }catch(err){
        console.error("Error fetching blogs", err.message);
        res.status(500).json({error: "Internal server error"});
    }
}

module.exports = {getBlogs};