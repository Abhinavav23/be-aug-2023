const os = require("os"); // import statement
console.log("inside os module");

console.log("Architecture", os.arch());
console.log("platform", os.platform());
const freeMemory = os.freemem(); //return value in bites
console.log("free memory", (freeMemory/1024)/1024, "MB"); 

const totalMem = os.totalmem();
console.log("total Memory", ((totalMem/1024)/1024)/1024, "GB");

const CPU = os.cpus();
console.log("CPU", CPU);

const release = os.release();
console.log("Release", release);

const user = os.userInfo();
console.log("user", user);

const upTime = os.uptime(); //returns in sec
console.log("upTime", ((upTime/60)/60)/24);
