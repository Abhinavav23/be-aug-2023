const express = require("express");

const router = express.Router();

router.get("/address", (req, res) => {
    res.send("address")
})

router.get("/orders", (req, res) => {
    res.send("orders")
})

module.exports = router;