import { signinObject, userObject } from "@repo/common/types";
import { Request, Response } from "express";
import prisma from "@repo/db"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
// import { Prisma } from "@prisma/client"

export const signup = async(req :Request, res : Response) => {
    const parsedObject = userObject.safeParse(req.body)
    

    if(!parsedObject.success){
        res.status(400).json({
            err : `zod error : ${parsedObject.error.errors}`
        })
        return
    }

    const { username, password, email, name } = parsedObject.data

    if(!email){
        return
    }
    // you can define another userobject in zod but i want to make it inside the if statement 
    
    try {

        const hasedPassword = await bcrypt.hash(password, 10)
        await prisma.user.create({
            data : {
                username,
                password : hasedPassword,
                email,
                name
            }
        })
        

        res.status(200).json({
            msg : "user creaeted "
        })
    } catch (error) {

        // @ts-ignore
        if(error.code === "P2002  "){
            res.status(409).json({
                msg : "user already exits | either user name or email "
            })
        }

        res.status(500).json({
            msg : 'something went wrong while signup'
        })
    }

}


export const signin = async(req : Request, res : Response) => {
    const parsedObject = signinObject.safeParse(req.body)

    if(!parsedObject.success){
        res.status(400).json({
            msg : `zod error ${parsedObject.error.errors}`
        })
        return
    }

    const {username, password} = parsedObject.data
    try {
        const user = await prisma.user.findUnique({
            where : {
                username : username
            }
        })

        if(!user){
            res.status(404).json({
                msg : "user doesnot exits bro"
            })
            return
        }

        const comparePassword = await bcrypt.compare(password, user.password)

        if(!comparePassword){
            res.status(403).json({
                msg : "Invalid password"
            })
            return
        }

        const token  = jwt.sign(user.id, process.env.jwt_secret as string)

        res.status(200).json({
            msg : "user logged in",
            token 
        })
    } catch (error) {
        res.status(500).json({
            msg : `error while logged In `
        })
    }
}

export const getUser = (req : Request, res: Response) => {
    
}