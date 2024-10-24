const express = require("express");
const productRoute = require("./routes/productRouter");
const profileRoute = require("./routes/profileRoute");
const userRoute = require("./routes/userRouter")

const app = express();

// middlewares
app.use("/product", productRoute);
app.use("/profile", profileRoute);
app.use("/user", userRoute);


/*
// ---------Javascript -----------
const arr = [10, 23, 45, 50, 30, 26, 57, 68];

// elements which are more than 15
// filter returned a new array
const filteredArr = arr.filter((el) => {
    return el > 15
})

// older array is as is
// console.log("arr", arr);

// console.log("filteredArr", filteredArr);

const index = arr.findIndex((el) => {
    return el === 50
})

console.log("index", index); //3

const splicedArray = arr.splice(index, 3);
console.log("splicedArray", splicedArray);
console.log("arr", arr);
*/


module.exports = app
