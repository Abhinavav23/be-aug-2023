const path = require("path");
console.log("in path module");
// console.log(path);

const currDir = path.dirname("/Users/abhinav/Desktop/BE-Aug-2023/builtin-modules/path.js");
console.log("current Dir:", currDir);

const fileName = path.basename("/Users/abhinav/Desktop/BE-Aug-2023/builtin-modules/path.js", ".js");
console.log("fileName:", fileName);

console.log("current directory", __dirname);

const person = {
    name: "abhinav"
}

console.log(person.name);