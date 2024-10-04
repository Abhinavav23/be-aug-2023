const http = require("http");

http.request("http://localhost:4000/login", (res) => {
    console.log("response recieved");
    res.setEncoding("utf-8");
    res.on("data", (mydata) => {
        // console.log("mydata", mydata.toString());
        console.log("mydata", mydata);
        console.log("data recieved");
    })
})
.end();


// res.emit("data", myData)