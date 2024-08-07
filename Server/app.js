const express = require('express')
const { dbConnection } = require('./config/database.config')
require('dotenv').config()
const authRouter = require('./route/auth.route')
const walletRouter = require('./route/wallet.route')
const transactionRouter = require('./route/transaction.route')
const PORT = process.env.PORT
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
dbConnection()

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', authRouter)
app.use('/wallet', walletRouter)
app.use('/transaction', transactionRouter)



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})