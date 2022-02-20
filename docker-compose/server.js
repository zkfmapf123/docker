import express from 'express'
import redis from 'redis'

const app = express()

app.get('/', async(req,res)=>{
    const client = redis.createClient({
        // not docker : https://redis-server.com
        // use docker : redis-server (services)
        host: 'redis-server',
        port: 6379
    })
    await client.connect()
    client.get('number',(err, number)=>{
        if(err){
            res.send(err)
        }

        client.set('number',parseInt(number)+1)
        res.send(number)

    })
    
    res.send('hi hello')
})

app.listen(3000,()=>{
    console.log(`connect lcoalhost:3000`)
})