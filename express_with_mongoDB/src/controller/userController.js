const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = (req, res) => {
    const userData = req.body
    console.log("userData", userData);
    console.log("passowrd", userData.password);
    
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(userData.password, salt);
    console.log("hashedPassword", hashedPassword);
    userData.password = hashedPassword;

    User.create(userData)
    .then((createdData) => {
        res.status(201)
        res.send({message: "created successfully", data: createdData})
    })
    .catch((err) => {
        res.status(400)
        res.send({message: "error occurred!!", error: err})
    })
}

const login = async(req, res) => {
    const {email, password} = req.body
    try{
        const userInDB = await User.findOne({email});
        if(userInDB){
            // match password
            const isPasswordMatching = bcrypt.compareSync(password, userInDB.password);
            if(isPasswordMatching){
                const token = jwt.sign({userId: userInDB._id, email: userInDB.email}, process.env.SECRET, {expiresIn: "1h"})
                res.status(200).json({message: "successfully logged in", token});
            }else{
                res.status(400).json({message: "invalid password!!"});
            }
        }else{
            res.status(400).json({message: "invalid email!!"})
        }
    }catch(err){
        res.send({message: "error occurred!!", error: err})
    }
}

const getMyProfile = async(req, res) => {
    const {authorization} = req.headers;
    if(authorization){
        const token = authorization.split(" ")[1];
        try{
            const userInfo = jwt.verify(token, process.env.SECRET);
            if(userInfo){
                const userDetails = await User.findById(userInfo.userId).select({password: 0});
                res.json(userDetails);
            }
        }catch(err){
            res.send({message: err})
        }
    }else{
        res.send({message: "not a valid request"})
    }
    
}

module.exports = {createUser, login, getMyProfile}