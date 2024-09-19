const mongoose = require('mongoose')

const { ObjectId, Schema } = mongoose


const UserSchema = new Schema({
    email: {
        type : String,
        unique : true,
        require : true, 
        lowercase : true
    },
    password : {
        type : String,
        require : true,
    },
    name : {
        type : String,
        require : true,
        minlength : 3
    }
}, {timestamps: true})

const TodoSchema = new Schema({
    title : {
        type : String,
        require : true,
    },
    done : {
        type : Boolean,
        default : false
    },
    userId : {
        type : ObjectId,
        ref : 'user' // in mongoDb => User => user
    }
}, {timestamps : true}) // for created at and upadted at in db 


const UserModel = mongoose.model('User', UserSchema)
const TodoModel = mongoose.model('Todo', TodoSchema) 


module.exports = {
    UserModel,
    TodoModel
}