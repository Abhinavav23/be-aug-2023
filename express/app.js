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
    console.log("checking user login status"); //1
    
    // any code -- code for checked user validity
    const validUser = true;
    if(validUser){
        console.log("moving next"); //2
        next();
    }else{
        console.log("going back");
        res.send({error: "please login first"})
    }
}

const logTheInfo = (req, res, next) => {
    console.log("user visited"); //3
    next();
}

// using middleware
app.use(checkLogin); // 1
app.use(logTheInfo); // 2

app.get("/message", (req, res) => {
    console.log("executing message handler"); //4
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




/*
console.log("start");
for (var i = 0; i <= 3; i++) {
    function print(i){
        setTimeout(function () {
            console.log(i); //0 //1 // 2
        }, 1000 + i);
    }
    print(i);
}
console.log("end");

// WebAPis
// fn1 --> 1000 ---> i = 4
// fn2 --> 1001
// fn3 --> 1002


function test(a){
    var i = 10;
    var z = 30;
    var name = "abhinav"
    return function myname(){
        console.log("a",a);
    }
}

const value = test(10);
value();
test(20);
console.log("fvsdfvcs");
console.log("fvsdfvcs");
console.log("fvsdfvcs");
console.log("fvsdfvcs");
console.log("fvsdfvcs");
console.log("fvsdfvcs");
console.log("fvsdfvcs");
value();
*/