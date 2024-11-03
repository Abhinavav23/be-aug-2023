const User = require("../model/userModel");

const createUser = (req, res) => {
    const userData = req.body
    console.log("userData", userData);
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

module.exports = {createUser}