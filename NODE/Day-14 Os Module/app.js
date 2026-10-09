const os = require("os");

console.log("os platform:",os.platform());
console.log("os Architecture:", os.arch());
console.log("No of cpus:",os.cpus().length);
console.log("total memory in GB:",os.totalmem()/1024/ 1024/1024);
console.log("Free memory:", os.freemem()/1024/1024/1024);
console.log("Home directory:",os.homedir());
console.log("Hostname:",os.hostname());
console.log("Temporary Directory:",os.tmpdir());


