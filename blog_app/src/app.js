const express = require("express");
const app = express();
const userRouter = require("./routes/userRoute");
const blogRouter = require("./routes/blogRoutes");

// middleware
app.use(express.json());
app.use("/user", userRouter);
app.use("/blog", blogRouter);

module.exports = app