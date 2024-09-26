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
// instructions / arguments
// 1. path
// 2. once done then call this callback
/*
fs.mkdir("builtin-modules/fileContainer", (err) => {
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


fs.rename("builtin-modules/new", "builtin-modules/fileContainer", (err) => {
    if(err){
        console.log("err: ", err);
    }else{
        console.log("directory updated successfully");
    }
})


fs.rmdir("builtin-modules/fileContainer", (err) => {
    if(err){
        console.log("error:-----", err);
    }else{
        console.log("delete success");
    }
})


// Files 
// 1. check if the file exist in the path
// 2. if exist ---> write the content in the file
// 3. if doest exist ---> a. create the file fist b. write the content in the file

fs.writeFile("builtin-modules/fileContainer/name.txt", "Abhinav", (err) => {
    if(err){
        console.log("error:-----", err);
    }else{
        console.log("file created and content added");
    }
})


// 1. check if the file exist in the path
// 2. if exist ---> append the content in the file
// 3. if doest exist ---> a. create the file fist b. append the content in the file
const jsContent = "\nconsole.log('email file')\n var a = 10; \n var b= 20 \n console.log(a+b)";
const jsonContent = `{"name": "value", "address": { "street": "value"}}`;

fs.appendFile("builtin-modules/fileContainer/emails.json", jsonContent , (err) => {
    if(err){
        console.log("error:-----", err);
    }else{
        console.log("file append successful");
    }
})
*/

fs.readFile("builtin-modules/fileContainer/emails.json", "utf-8", (err, data) => {
    if(err){
        console.log("error:-----", err);
    }else{
        // returns data in buffer format
        console.log("data: ", data)
        // convert to string
        // const stringData = data.toString();
        // console.log("string data: ", stringData)
    }
})












// const createFile = async() => {
//     // arguments
//     // 1. file's path
//     // 2. file content
//     try{
//         await fsAsync.writeFile("builtin-modules/fileContainer/name.txt", "this is a new file");
//         console.log("file created successfully");
//     }catch(e){
//         console.log("error: --", e);
//     }
// }

// createFile();

console.log("end");
