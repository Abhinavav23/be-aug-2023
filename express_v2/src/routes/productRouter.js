const express = require("express");

const router = express.Router();

router.get("/furnitures", (req, res) => {
    res.send("furnitures")
})

router.get("/clothing", (req, res) => {
    res.send("clothing")
})

router.get("/appliances", (req, res) => {
    res.send("appliances")
})

module.exports = router