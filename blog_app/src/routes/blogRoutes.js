const express = require("express");
const router = express.Router();
const { createBlog, getallBlogs, getSingleBlog} = require("../controllers/blogController");

router.post("/new", createBlog);
router.get("/all", getallBlogs);
router.get("/single/:blogId", getSingleBlog);

module.exports = router;