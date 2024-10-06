const EventEmitter = require("events"); //commonJS
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



// Signup
const Signup = new EventEmitter();
const signupStart = () => {
    console.log("1 --starting user creation");
}
const signupLog = () => {
    console.log("2 --logging user creation");
}

Signup.addListener("start_user_signup", signupStart);
Signup.emit("start_user_signup"); // 10

Signup.addListener("start_user_signup", signupLog);
// Signup.emit("start_user_signup"); //2

// Signup.emit("startcar");

Signup.addListener("start_user_signup", () => {
    console.log("3-- handler 3");
});
// Signup.emit("start_user_signup");

*/

const Message = new EventEmitter();
const sendMessage = (sender, receiver) => {
    // code to send message
    console.log(`sending message ---- from ${sender} to ${receiver}`);
    // cbQueue.push(fileWriteCB)
}

const saveMessage = (sender, receiver) => {
    console.log(`saving message ---- from ${sender} to ${receiver}`);
}

const deleteMessage = (message) => {
    console.log("delete message -----", message);
}

const runOnce = (sender, receiver) => {
    console.log("should run only once for", sender, receiver);
}

/*
//  ---- adding listeners
Message.addListener("send", sendMessage);
Message.addListener("send", saveMessage);

Message.emit("send", "Abhinav", "vivek"); //2
Message.emit("send", "Surjeet", "Abhishek"); //2

// removing listener
Message.removeListener("send", saveMessage);

Message.emit("send", "Surjeet", "Chhotu"); // 1
*/


// adding listener
Message.on("send", sendMessage);
Message.on("send", saveMessage);
Message.once("send", runOnce);

// Message.emit("send", "Abhinav", "vivek"); //2 --- 3
console.log("--------------");
Message.emit("send", "Surjeet", "Abhishek"); //2 --- 2 -- 3
console.log("--------------");

// removing listener
Message.off("send", saveMessage);
Message.emit("send", "Surjeet", "Chhotu"); // 1 --- 1







// Message.emit("delete", "Hello..."); // wont work because handler is yet not added
// Message.addListener("delete", deleteMessage);
// Message.emit("delete", "Hello..."); // get the o/p










// const calculator = (a) => {
//     console.log("value is ", a); 
// }

// calculator(10);
// calculator();
