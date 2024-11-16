const Blog = require("../models/blogModel");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const createBlog = async(req, res) => {
    const blogDetail = req.body;
    const {authorization} = req.headers;
    if(authorization){
        const token = authorization.split(" ")[1];
        try{
            const userInfo = jwt.verify(token, process.env.SECRET);
            console.log("userInfo", userInfo);
            
            if(userInfo){
                const userDetails = await User.findById(userInfo.userId).select({password: 0});
                const blog = await Blog.create({...blogDetail, user: userInfo.userId, username: userDetails.username})
                res.json(blog);
            }
        }catch(err){
            res.status(400).send({message: "failed", err})
        }
    }else{
        res.status(500).send({message: "you are not allowed to create a blog"})
    }
   
};

const getallBlogs = () => {};

const getSingleBlog = () => {};

module.exports = { createBlog, getallBlogs, getSingleBlog };
