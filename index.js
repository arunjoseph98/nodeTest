require('dotenv').config()
const experss = require('express')
const cors = require('cors')
const router = require('./router/router')
require('./DB/dbConn')

const server = experss()

server.use(cors())
server.use(experss.json())
server.use(router)

PORT = 3000

server.listen(3000,()=>{
    console.log("server running...");
    
})