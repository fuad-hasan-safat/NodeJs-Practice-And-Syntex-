const os = require('os')

// user info
const user = os.userInfo()
console.log(user)

// system up time in secongs

const sysUpTime = os.uptime()
console.log(`The system uptime is ${sysUpTime} seconds.`)


const currentOs = {
    name: os.type(),
    release: os.release(),
    totMemory: os.totalmem(),
    freeMemory: os.freemem(),
}
console.log(currentOs)