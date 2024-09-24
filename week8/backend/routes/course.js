const { Router } = require('express')
const { model } = require('mongoose')
const { userAuth } = require('../middlewares/user')
const { PurchaseModel, courseModel } = require('../db')

const courseRouter = Router()

courseRouter.post('/buyCourse', userAuth, async(req, res) => {
    const userId = req.id
    // console.log(userId);
    const courseId = req.body.courseId
    
    // if(!userId){
    //     return 'no user id'
    // }

    await PurchaseModel.create({
        userID : userId,
        courseId
    })

    res.status(200).json({
        message : 'you have successfully bought the course '
    })
})

courseRouter.get('/preview', async (req, res) => {

    const courses = await courseModel.find({})

    res.status(200).json({
        courses
    })


})


module.exports = {
    courseRouter
}