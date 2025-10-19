const express = require("express");
const router = express.Router();
const {getBlogs,getBlogById} = require("../Controllers/blogController");

router.get("/", getBlogs);
router.get("/:id", getBlogById )

module.exports = router;