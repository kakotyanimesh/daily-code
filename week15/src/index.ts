import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import jwt from 'jsonwebtoken'

const port : number = 3000
const app = express()

app.post('/api/v1/signup', (req, res) => {

})

app.post('/api/v1/signin', (req, res) => {

})

app.get('/api/v1/content', (req, res) => {

})


app.listen(port, () => {
    mongoose.connect('')
    console.log(`the app is running at http://localhost/${port}`);
    
})