const { Router } = require('express')
require('dotenv').config()
const { model } = require('mongoose')
const bcrypt = require('bcrypt')
const z = require('zod')
const jwt = require("jsonwebtoken")
const userRouter = Router()
const { userModel } = require('../db')
const userAuth = require('../middlewares/user')


userRouter.post('/signup', async (req, res) => {
    try {
        // we have to make a zodSchema to validate our conditions
        const requieBody = z.object({ 
            email : z.string().email({message : "Invalid email address"}),
            fullName : z.string().min(3, {message : "min 3 character needed"}).max(15, {message : "max 13 character allowed"}),
            password : z.string().min(5, {message : 'min 5 character is allowed'}).max(15, {message : 'max 15 character is allowed'})
        })
    
        const parsedData = requieBody.safeParse(req.body) // we have to safely parse those data that we got from req.body 

        if(!parsedData.success){
            return res.status(404).json({
                message : "validation error",
                error : parsedData.error.errors
            })
        }

        const { email, fullName, password } = parsedData.data

        const hasedPassword = await bcrypt.hash(password, 10)

        await userModel.create({
            email : email,
            password : hasedPassword,
            fullName : fullName
        })

        res.status(200).json({
            message : 'user created successfully '
        })
    
    } catch (error) {
        res.status(400).json({
            message : `something went wrong & error is : ${error}`
        })
    }

})


userRouter.post('/signin', async (req,res) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({  // use findOne as it returns one user but find return arrays of user 
            email
        })

        const comparePassword = await bcrypt.compare(password, user.password)

        if(!user && !comparePassword){
            return res.status(404).json({
                message : 'unable to find the user'
            })
        }

        const token = jwt.sign({
            id : user._id
        }, process.env.jwt_secret_user, {expiresIn : '5hr'})

        res.status(200).json({
            token : token,
            message : 'user logged in successfully'
        })
    } catch (error) {
        res.status(404).json({
            message : `error is ${error}`
        })
    }
})


// userRouter.get('/purchasedCourses', userAuth, (req, res) => {
//     res.send("animesdh")
// })

// userRouter.get('/purchasedCourse', userAuth, async (req, res) => {
    
// })


module.exports = {
    userRouter
}