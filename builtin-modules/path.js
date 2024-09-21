const path = require("path");
console.log("in path module");
// console.log(path);

const currDir = path.dirname("/Users/abhinav/Desktop/BE-Aug-2023/builtin-modules/path.js");
// console.log("current Dir:", currDir);

const fileName = path.basename("/Users/abhinav/Desktop/BE-Aug-2023/builtin-modules/path.js", ".js");
// console.log("fileName:", fileName);

// console.log("current directory", __dirname);
// console.log("current file", __filename);

// global object in node js
// two types
// 1. absolute path
// 2. relative path

// same level directories --> ./
// one level up -- ../
// inside directory -- /


const createdPath = path.join(__filename, "../../", "npm_modules/app.js");
console.log("createdPath", createdPath);


// /Users/abhinav/Desktop/BE-Aug-2023/npm_modules/app.js






const person = {
    name: "abhinav"
}

// console.log(person.name);