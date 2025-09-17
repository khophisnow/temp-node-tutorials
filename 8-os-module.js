const { log } = require("console");
const os = require("os");

const user = os.userInfo();

console.log(user);

console.log(`The System up time is ${os.uptime()} seconds.`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMen: os.totalmem(),
    freeMen: os.freemem(),
}

console.log(currentOS);
