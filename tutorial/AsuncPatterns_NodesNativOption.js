const { readFile, writeFile } = require('fs').promises
// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async()=>{
    try{
        const first = await readFile('./content/subfolder/text.txt', 'utf8')
        const second = await readFile('./content/subfolder/text1.txt', 'utf8')
        await writeFile(
            './content/subfolder/result_promise.txt',
            `THIS IS AWSOME: ${first}.\n${second}.`,
            {flag:'a'}
        )
        console.log(first, second)
    }catch(error){
        console.log(error)
    }
}

start()