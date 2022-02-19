import {writeFile, sleep} from './func'


function job1(files){
    while(true){
        writeFile(files, 'job1 hello world')
        sleep(5000)
    }
}

job1("job1")
