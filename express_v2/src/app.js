const express = require("express");
const productRoute = require("./routes/productRouter");
const profileRoute = require("./routes/profileRoute");
const userRoute = require("./routes/userRouter")

const app = express();

// middlewares
app.use("/product", productRoute);
app.use("/profile", profileRoute);
app.use("/user", userRoute);

module.exports = app