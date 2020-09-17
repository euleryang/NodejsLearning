//https://zhuanlan.zhihu.com/p/250397239
//通过Node和Redis进行API速率限制
//crul -H "Content-Type: application/json" -X POST -d '{"user_id": "123", "coin":100, "success":1, "msg":"OK!" }' http://localhost:3000
//crul -X POST http://localhost:3000
//curl -uri 'http://localhost:3000' -Method POST
//172.22.0.22 172.22.17.10 172.20.24.176

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const redis = require('ioredis')
const client = redis.createClient({
  port: process.env.REDIS_PORT || 6379,
  host: process.env.REDIS_HOST || 'localhost',
})
client.on('connect', function () {
  console.log('connected');
});

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', async (req, res) => {
  async function isOverLimit(ip) {
    let res
    try {
      res = await client.incr(ip)
    } catch (err) {
      console.error('isOverLimit: could not increment key')
      throw err
    }
    console.log(`${ip} has value: ${res}`)
    if (res > 10) {
      return true
    }
    client.expire(ip, 10)
  }
  // check rate limit
  let overLimit = await isOverLimit(req.ip)
  if (overLimit) {
    res.status(429).send('Too many requests - try again later')
    return
  }
  // allow access to resources
  res.send("Accessed the precious resources!")
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
