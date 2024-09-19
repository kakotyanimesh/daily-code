const express = require('express')
const { UserModel, TodoModel } = require('./db')
const { auth, jwt_secret } = require('./auth')
const { z, string } = require('zod')
const jwt = require('jsonwebtoken')
const app = express()
const port = 3000

app.post('/signUp',async (req, res) => {
    try {
        const requirebody = z.object({
            email : z.string().email({message : 'provide a verified email'}).toLowerCase(),
            password : z.string().max(20, {message : 'max 20 char allowed'}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#%^&*])[A-Za-z\d@!~#$%&^*]{8,}/,
                // no spaces b/w =.*[] & regex should be /^/
                {
                    message : "password doesnot meet the requirement"
                }
            ),
            name : z.string().min(5, {message : "min 5 requires"}).max(10, {message : "max 10 letters is allowed "}).toLowerCase()
        })

        const parseData = requirebody.safeParse(req.body)
    } catch (error) {
        res.status(401).json({
            message : `cant able to create user : ${error}`
        })
    }
})

app.listen(port, () => console.log(`the app is running at http://localhost:${port}`))
