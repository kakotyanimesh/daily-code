import mongoose, { Schema, Document } from "mongoose";

// we have to define interface for userschema and model which extends the document from mongoose library so that it fits the mongoose api 
interface UsersInterface extends Document {
    email : string,
    username : string,
    password : string
}


const userSchema = new Schema<UsersInterface>({
    email : {
        type : String,
        required : true,
        unique : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})


export const userModel = mongoose.model<UsersInterface>('User', userSchema) 