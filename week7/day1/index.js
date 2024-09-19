const express = require("express")
const mongoose = require('mongoose')
const { z } = require('zod')
const bcrypt = require('bcrypt')
const { Usermodel, Todomodel } = require('./db.js')
const jwt = require("jsonwebtoken")
const { auth, jwt_secret } = require("./auth.js")
const app = express()
const port = 3000


mongoose.connect('mongodb+srv://animeshkakoty07:Animesh@cluster0.kyw0y.mongodb.net/todo-app-day2')


app.use(express.json())

app.post('/signUp', async (req, res) => {
    try {
        // check that the password has one uppercase char lowercase 1 spl character 
        const requirebody = z.object({
            email : z.string().min(3).max(20).email(),
            password : z.string().min(3).max(10),
            name : z.string().min(3).max(12)
            // this all methods give by zod 
        })
        // step 2 => parse 

        // const parseData = requirebody.parse(req.body) => throw err so dont use it 
        const parseData = requirebody.safeParse(req.body)  // doesnt throw error so it 


        if(!parseData.success){
            res.json({
                message : "incorrect format",
                error : parseData.error
            })
            return
        }


        const { email, password, name } = req.body
        
        const hasedPassword = await bcrypt.hash(password, 10)
        // hashing the password and gonna store it in db 
    
        console.log(hasedPassword);
        
    
    
    
        await Usermodel.create({
            email : email,
            password : hasedPassword,
            name : name
        })
    
        res.json({
            message : "user created !!"
        })
    } catch (error) {
        res.json({
            message : error
        })
        
    }
    
})
app.post('/signIn', async (req, res) => {
    const { email, password } = req.body
    
    // input validation => zod  


    const user = await Usermodel.findOne({
        email : email,
        
    })
    if(!user){
        res.status(403).json({
            message : "user not exit"
        })
        return
    }

    const passwordMatched = bcrypt.compare(password, user.password)
// there is a problem here token in wrong password also 
    if(user && passwordMatched){
        const token = jwt.sign({
            id: user._id.toString()
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
