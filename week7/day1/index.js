const express = require("express")
const mongoose = require('mongoose')
const { Usermodel, Todomodel } = require('./db.js')
const jwt = require("jsonwebtoken")
const { auth, jwt_secret } = require("./auth.js")
const app = express()
const port = 3000


mongoose.connect('mongodb+srv://animeshkakoty07:Animesh@cluster0.kyw0y.mongodb.net/todo-app')


app.use(express.json())

app.post('/signUp', async (req, res) => {
    const { email, password, name } = req.body

    await Usermodel.create({
        email : email,
        password : password,
        name : name
    })

    res.json({
        message : "user created !!"
    })
    
})
app.post('/signIn', async (req, res) => {
    const { email, password } = req.body

    const response = await Usermodel.findOne({
        email : email,
        password : password
    })

    if(response){
        const token = jwt.sign({
            id: response._id.toString()
        }, jwt_secret, {expiresIn : '5hr'})

        res.json ({
            token
        })
    } else {
        res.status(403).json({
           message: "user not exits !!"
        })
    }
})
app.post('/todos', async (req, res) => {
    const {title, done } = req.body

    await Todomodel.create({
        title : title, 
        done : done
    })

    res.status(200).json({
        message : "todo created "
    })

})
app.get('/todos', async (req, res) => {
    const userId = req.userId

    const todos = await Todomodel.find({
        userId
    })

    res.status(200).json({
        todos,
    })
})



app.listen(port, ()=> console.log(`the app is running at http://localhost:${port}`))
