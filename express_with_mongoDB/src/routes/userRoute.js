const express = require("express");
const { createUser, login, getMyProfile } = require("../controller/userController");

const router = express.Router();

router.post("/new", createUser)

router.post("/login", login);

router.get("/myProfile", getMyProfile)

module.exports = router