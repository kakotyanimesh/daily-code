const mongoose = require('mongoose')

const { Schema } = mongoose
const ObjectId = Schema.Types.ObjectId


const UserSchema = new Schema({
    email : {
        type : String,
        unique : true
    },
    fullName : {
        type : String,
    },
    password : {
        type : String
    }
})


const adminSchema = new Schema({
    email : {
        type : String,
        unique : true
    },
    fullName : {
        type : String,
    },
    password : {
        type : String
    }
})

const CourseSchema = new Schema({
    title : {
        type : String
    },
    description : {
        type : String
    },
    price : {
        type : Number
    },
    creatorID : ObjectId
})

const PurchaseSchema = new Schema({
    userID : ObjectId,
    courseID : ObjectId
})

const userModel = mongoose.model('user', UserSchema)
const adminModel = mongoose.model('admin', adminSchema)
const courseModel = mongoose.model('course', CourseSchema)
const PurchaseModel = mongoose.model('purchase', PurchaseSchema)



module.exports = {
    userModel,
    adminModel,     
    courseModel,
    PurchaseModel 
}