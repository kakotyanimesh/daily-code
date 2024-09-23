const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const { courseRouter } = require('./routes/course')
const { userRouter } = require('./routes/user')
const { adminRouter } = require('./routes/admin')
const app = express()
const mongoDBUrl = process.env.mongoDBUrl

const port = 3000
app.use(express.json())

// router used ... to organize the code 
app.use('/api/v1/user', userRouter)
app.use('/api/v1/course', courseRouter)
app.use('/api/v1/admin', adminRouter)



const main = async () => {
    try {
        await mongoose.connect(mongoDBUrl)
        app.listen(port, () => console.log(`the app is running at http://localhost:${port}`))
    } catch (error) {
        console.log(`error in mongoconnection ${error}`);
        
    }
}

main()