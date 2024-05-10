const express = require('express')
const { dbConnection } = require('./config/database.config')
require('dotenv').config()
const userRouter = require('./route/user.route')
const PORT = process.env.PORT
const bodyParser = require('body-parser')


const app = express()
dbConnection()

app.use(bodyParser.json());
app.use('/user', userRouter)



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})