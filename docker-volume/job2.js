import {writeFile, sleep} from './func'


function job2(files){
    while(true){
        writeFile(files, 'job2 hello world')
        sleep(5000)
    }
}

job2("job2")
