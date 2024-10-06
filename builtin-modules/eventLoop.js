const fs = require("fs");

console.log("start");

fs.writeFile("name.txt", "Abhinav", (err) => {
    if(err){
        console.log("err", err);
    }else{
        console.log("file write successful");
    }
})

// node adds some minimal amount of delay from its side
setTimeout(() => {
    console.log("timer complete");
}, 0);

setImmediate(() => {
    console.log("from immidiate");
});

Promise.resolve().then(() => console.log("from promise"));

process.nextTick(() => {
    console.log("from next tick");
    setImmediate(() => {
        console.log("from next tick immidiate");
    })
})

console.log("end");

// start
// end


