const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async(req, res) => {
    console.log("body", req.body);
    
    const user = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(user.password, salt);
    user.password = hashedPassword;
    try{
       const newUser=  await User.create(user);
       res.status(201).json({message: "user created successfully", user: newUser});
    }catch(err){
        res.status(400).json({message: "failed", err: err.message})
    }
}

const login = async(req, res) => {
    const {username, password} = req.body;
    try{
        const user = await User.findOne({username});
        if(user){
            const isPasswordMatched = bcrypt.compareSync(password, user.password);
            if(isPasswordMatched){
                const token = jwt.sign({userId: user._id}, process.env.SECRET, {expiresIn: "24hr"})
                res.status(200).json({message: "login successful", token})
            }else{
                res.status(400).json({message: "wrong password"})
            }
        }else{
            res.status(400).json({message: "user not found"})
        }
    }catch(err){
        res.status(500).json({message: "failed", err})
    }
}

module.exports = {createUser, login}