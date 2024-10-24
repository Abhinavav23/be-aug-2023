const expressApp = require("./app");
const dotenv = require("dotenv");
dotenv.config();

const PORTNumber = process.env.PORT;
console.log("PORTNumber", PORTNumber);
console.log("password", process.env.password);
console.log("MongoDBConnectionURL", process.env.MongoDBConnectionURL);

expressApp.listen(PORTNumber, () => {
    console.log(`express app running at ${PORTNumber}`);
})