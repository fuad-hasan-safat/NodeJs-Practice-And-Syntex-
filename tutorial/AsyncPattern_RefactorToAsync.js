const { readFile } = require('fs')
const getText = (path) => {
    return new Promise((resolve, reject) =>{
        readFile(path, 'utf8', (err, data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
    
}

const start = async()=>{
    try{
        const first = await getText('./content/subfolder/text.txt')
        const second = await getText('./content/subfolder/text1.txt')
        console.log(first, second)
    }catch(error){
        console.log(error)
    }
}

start()