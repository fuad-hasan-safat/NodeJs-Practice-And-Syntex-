const file = require('fs')

const first = file.readFileSync('./content/subfolder/text.txt','utf8')
const second = file.readFileSync('./content/subfolder/text1.txt','utf8')

file.writeFileSync(
    './content/subfolder/result.txt',
    `Here is the result:--- \n${first}\n${second}\n`,
    {flag: 'a'}
)
