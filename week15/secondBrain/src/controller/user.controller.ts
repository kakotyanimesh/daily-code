import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Request, Response } from "express"
import { userModel } from "../model/user.model"

export const signUp = async(req : Request, res : Response)  => {
    const {email, username, password} = req.body

    const hasedPassword = await bcrypt.hash(password, 10)
    try {
        const findUser = await userModel.findOne({username})
        if(findUser) return res.status(403).json({
            msg : 'User already exists'
        })
        await userModel.create({
            username,
            email,
            password : hasedPassword
        })

        res.status(200).json({
            msg : 'user created Successfully'
        })
    } catch (error) {
        console.log(`something went wrong while signUp, ${error}`);
    }
}

// jwt we are gonna use 

export const signIn = async(req: Request, res : Response) => {
   try {
    const {email, password} = req.body
    const user = await userModel.findOne({email})

    if(!user){
        return res.status(403).json({
            msg : 'invalid email or password'
        })
    }

    const comparePassword = await bcrypt.compare(password, user.password)
    if(!comparePassword) return res.status(403).json({msg : 'invalid password or email'})

    
   } catch (error) {
    
   }
}