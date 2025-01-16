import { Request, Response } from "express";
import { signInObject, signupObject } from "@repo/common/zod"
import {prisma} from "@repo/db"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const signup = async(req : Request, res : Response) => {
    const parsedObject = signupObject.safeParse(req.body)

    if(!parsedObject.success){
        res.status(403).json({
            err : JSON.stringify(parsedObject.error.errors)
        })
        return
    }

    const {name, password, email} = parsedObject.data

    try {
        const hasedPassword = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data : {
                name,
                password : hasedPassword,
                email
            }
        })

        res.status(200).json({
            msg : 'user created', 
            user : user.id
        })
    } catch (error) {
        // @ts-ignore
        if(error instanceof Error && error.code === "P2002"){
            res.status(403).json({
                msg : "user with that email already exits"
            })
        }
        res.status(500).json({
            msg : `Something went wrong server down ${error}`
        })
    }
}



export const signin = async (req : Request, res : Response) => {
    const parsedObject = signInObject.safeParse(req.body)
    
    if(!parsedObject.success){
        res.status(403).json({
            msg : JSON.stringify(parsedObject.error.errors)
        })
        return
    }

    const { email, password} = parsedObject.data

    try {
        const user = await prisma.user.findUnique({
            where : {
                email : email
            }
        })

        if(!user){
            res.status(404).json({msg : "user doesnot exits "})
            return
        }

        const comparePassword = await bcrypt.compare(password, user.password)

        if(!comparePassword){
            res.status(404).json({msg : "password doesnot matched !! "})
            return
        }

        //  dont forget to add the { brackets } while creating the token 
        const generatedAccessToken = jwt.sign({userId : user.id}, process.env.ACCESS_TOKEN_SECRET as string, {expiresIn : process.env.ACCESS_TOKEN_EXPIRY})
        const generatedRefreshToken = jwt.sign({userId : user.id}, process.env.REFRESH_TOKEN_SECRET as string, {expiresIn : process.env.REFRESH_TOKEN_EXPIRY})

        const options = {
            httpOnly : true,
            secure : true
        }

        res.status(201)
        .cookie('accessToken', generatedAccessToken, options)
        .cookie('refreshToken', generatedRefreshToken, options)
        .json({msg : "user signed up"})
        
        // u cant send json first remember 
    } catch (error) {
        res.status(500).json({
            msg : `server dead ig ${error}`
        })
    }
}