import {writeFile, sleep} from './func'


function job3(files){
    while(true){
        writeFile(files, 'job3 hello world')
        sleep(5000)
    }
}

job3("job3")
