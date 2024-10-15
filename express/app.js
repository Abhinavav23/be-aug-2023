const express = require("express");

const app = express();

// CRUD : create, Read, Update, Delete
/*
const productsArray = [];

app.post("/product", (req, res) => {
    console.log("creating a product");
    const productName = `product-${productsArray.length}`
    productsArray.push(productName);
    res.send("product created");
})

app.get("/product", (req, res) => {
    console.log("reading products");
    res.send(productsArray);
})

// route parameters
app.get("/product/{prodId}", (req, res) => {
    console.log("params", req.params);
    const index = req.params.prodId
    // res.send("reading one product");
    const product = productsArray[index];
    console.log("product", product);
    
    if(product){
        res.send(product);
    }else{
        res.send("product Not available")
    }
})

app.delete("/product/:prodId", (req, res) => {
    const index = req.params.prodId
    productsArray.splice(index, 1);
    console.log("product", productsArray);
    res.send("product deleted");
})

app.all("*", (req, res) => {
    res.send(`Error!! Page not found`)
})
*/

//  --------------middlewares -------------

const checkLogin = (req, res, next) => {
    console.log("checking user login status");
    
    const username = ["vivek", "surgeet", "abhinav"]
    // any code -- code for checked user validity
    const validUser = false
    if(validUser){
        next();
    }else{
        res.send({error: "please login first"})
    }
}

const logTheInfo = (req, res, next) => {
    console.log("user visited");
    next();
}

// using middleware
app.use(checkLogin); // 1
app.use(logTheInfo); // 2

app.get("/message", (req, res) => {
    console.log("executing message handler");
    res.send("messages")
})

app.get("/profile", (req, res) => {
    console.log("executing profile handler");
    res.send("profile")
})


const PORT = 4500
app.listen(PORT, () => {
    console.log(`express app running on port ${PORT}`);
})