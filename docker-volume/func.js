import fs from 'fs'

export const writeFile = (file, data) =>{
    const rootFolder = 'result'
    let result = fs.readFileSync(`${rootFolder}/${file}.txt`,'utf-8')
    result += `${result}\n${data}`
    fs.writeFileSync(`${rootFolder}/${file}.txt`,result, 'utf-8')
}

export const sleep = (time) =>{
    
    const wakeUptime = Date.now() + time
    while(Date.now() < wakeUptime) {}
}