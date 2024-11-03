const express = require("express");
const { createUser } = require("../controller/userController");

const router = express.Router();

router.post("/new", createUser)

router.post("/login", (req, res) => {
    res.send("login user");
})

module.exports = router