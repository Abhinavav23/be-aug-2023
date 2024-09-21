// CRUD operation on files system
// C --> create
// R -- Read
// U -- update
// D -- Delete

const fs = require("fs"); //importing built in module
const fsAsync = require("fs/promises");

// make directory

// async
// error first callbacks
console.log("start");
/*
fs.mkdir("builtin-modules/new", (err) => {
    console.log("err", err);
    if(err){
        console.log("something went wrong", err);
    }else{
        console.log("dir created successfully");
    }
})


// sync way
try{
    fs.mkdirSync("builtin-modules/new");
    console.log("created successfully");
}catch(err){
    console.log("error ocuured!!", err);
}


// ---- 100 lines ----
fs.readdir("builtin-modules/new", (err, dirs) => {
    if(err){
        console.log("error", err);
    }else{
        console.log("read success", dirs);
        // code for finding directory
    }
})


fs.rmdir("builtin-modules/new", (err) => {
    if(err){
        console.log("error", err);
    }else{
        console.log("delete success");
    }
})
*/


console.log("end");
