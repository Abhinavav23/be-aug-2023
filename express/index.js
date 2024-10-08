// import express
const express = require("express");
// creates new express application
const server = express();

server.get("/", (req, res) => {
    console.log("inside get /");
    res.send("<h1>Home Page</h1>");
    // const userInfo =  {
    //     name: "Abhinav",
    //     address: "Hyderabad"
    // }
    // res.send(userInfo);
})

server.get("/login", (req, res) => {
    // console.log("from login handler");
    // console.log("req", req);
    console.log("method", req.method);
    console.log("URL", req.url);
    console.log("headers", req.headers);
    
    res.send("<h1>Login Page</h1>");
})


// listen to requests
const PORT = 5500
server.listen(PORT, () => {
    console.log(`express server running on port:${PORT}`);
})


