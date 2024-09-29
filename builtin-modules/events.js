const EventEmitter = require("events");
/*
// Login scenario
const Login = new EventEmitter();

const startLoginHandlerFirst = (user, role) => {
    // we will try to log the user login activity in a log file
    console.log(`starting ${role} login for: ${user}`);
}

const startLoginHandlerSecond = (username, role) => {
    // we will try to log the user login activity in a log file
    console.log(`logging in a file for Role ${role}: ${username}`);
}

Login.addListener("start_login", startLoginHandlerFirst);

Login.addListener("start_login", startLoginHandlerSecond);

const userList = ["Abhinav", "Amit", "Vivek", "Surjeet"]
// Login.emit("start_login", "Abhinav");
// Login.emit("start_login");

// Login.emit("start_login", userList[0])
// Login.emit("start_login", userList[1])
// Login.emit("start_login", userList[2])

// Login.emit("start_login", "Abhinav", "admin")
Login.emit("start_login", "Amit");


*/
// Signup
const Signup = new EventEmitter();
const signupStart = () => {
    console.log("starting user creation");
}
const signupLog = () => {
    console.log("logging user creation");
}

Signup.addListener("start_user_signup", signupStart);
Signup.emit("start_user_signup");

Signup.addListener("start_user_signup", signupLog);
Signup.emit("start_user_signup");

// Signup.emit("startcar");












// const calculator = (a) => {
//     console.log("value is ", a); 
// }

// calculator(10);
// calculator();