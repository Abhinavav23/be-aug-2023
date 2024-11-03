const express = require("express");
const userRouter = require("./routes/userRoute");
const app = express();

// middlewares
app.use(express.json())
app.use("/user", userRouter);

module.exports = app;


// steps to create product 
// step 1. create product router
// step 2. create a path /new
// step 3. create product controller
// step 4. create a product Model
// step 5. call model to create product by passing the data from controller