const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId
// this two things we got from mongoose library => helps to create our schema/ structure to database

const User = new Schema({
    email: {type:String, unique:true}, 
    password: String,
    name: String
})

const Todo = new Schema({
    userId : ObjectId, 
    title: String, 
    done: Boolean
    
})


const Usermodel = mongoose.model("users", User) // creating models 
const Todomodel = mongoose.model("todos", Todo)
/**
    Schema is my db's structure and Model build top of Schema that allow me to interact with dbs  
*/


module.exports = {
    Usermodel, 
    Todomodel
}