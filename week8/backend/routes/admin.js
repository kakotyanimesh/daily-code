const { Router } = require('express')
const { adminModel } = require('../db')
const adminRouter = Router()
const z = require('zod')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt_secret = process.env.jwt_secret

adminRouter.post('/signup', async (req, res) => {
    try {
        const adminObject = z.object({
            email : z.string().email({message : 'Invalid email'}),
            fullName : z.string().min(4, {message : 'minimum 3 character is needed'}).max(15, {message : 'max 15 character is allowed'}),
            password : z.string().min(3, {message : 'min 3 character is allowed'}).max(14, {message : 'max 14 chracter is allowed'})
        })
    
        const parsedData = adminObject.safeParse(req.body)
    
        const { email, fullName, password } = parsedData.data
    
        const hasedPassword = await bcrypt.hash(password, 10)
    
        await adminModel.create({
            email : email,
            fullName : fullName, 
            password : hasedPassword
        })
    
        res.status(200).json({
            message : 'admin created Successfully'
        })
    } catch (error) {
        res.status(404).json({
            message : `unable to create admin ${error}`
        })
    }


})


adminRouter.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await adminModel.findOne({email})

        const comparePassword = bcrypt.compare(password, user.password)

        if(user && comparePassword){
            const token = jwt.sign({
                id : user._id
            }, jwt_secret, {expiresIn : '24hr'})

            res.status(200).json({
                message : 'user signed in ', 
                token : token
            })
        }
    } catch (error) {
        res.status(403).json({
            message : `unable to signed up ${error}`
        })
    }
})

adminRouter.post('/createCourse', (req, res) => {
    // const 
})


adminRouter.put('/updateCourse', (req, res) => {

})

adminRouter.get('/bulk', (req, res) => {

})


module.exports = {
    adminRouter
}