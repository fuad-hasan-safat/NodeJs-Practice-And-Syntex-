const { readFile, writeFile } = require('fs')
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async()=>{
    try{
        const first = await readFilePromise('./content/subfolder/text.txt', 'utf8')
        const second = await readFilePromise('./content/subfolder/text1.txt', 'utf8')
        console.log(first, second)
    }catch(error){
        console.log(error)
    }
}

start()