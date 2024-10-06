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

// function request(url, cb){
//     fetch(url)
//     .then((res) => {
//         const myRes = new EventEmitter();
//         cb(myRes);
//         if(when i get data){
//             myRes.emit("data", info)
//         }
//     })
// }