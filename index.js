// steps to define express server
// Loads .env file contents into process.env

require('dotenv').config();
const express = require('express');
const cors=require('cors')
const router=require('./routes/router')
require('./database/dbConnection')

const pfServer=express()

pfServer.use(cors())
pfServer.use(express.json())   // to support JSON-encoded bodies
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))

const PORT=3000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`Pfserver is running on port ${PORT} and waitinf for the client request!!!`)
})

pfServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:red;">Pfserver is running on port and waitinf for the client request!!<h1>`)
})

