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

const getBlogById = async (req, res) => {
    const {id} = req.params;
    try{
        const blog = await Blog.findById(id);
        if(!blog) return res.status(404).json({error: "Blog not found"});
        res.status(200).json({blog});
    }catch(err){
        res.status(500).json({error:"Failed to fetch blog"})
    }
}

module.exports = {getBlogs,getBlogById};