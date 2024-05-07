const express = require('express');
const app = express()
const userRouter = require('./routes/home_route')
const dbConnect = require('./config/mongose_config')
const morgan = require('morgan')
require('dotenv').config()
dbConnect()

const port = 3000
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/user',userRouter)
app.listen(port,()=>{
    console.log("Server connected");
})