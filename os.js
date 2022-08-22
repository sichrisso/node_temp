// Os Module

// Interacting with os and server

const os = require('os')
// Info about current user
const user = os.userInfo()
console.log(user)
// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)