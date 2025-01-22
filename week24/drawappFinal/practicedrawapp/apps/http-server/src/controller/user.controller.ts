import { userObject } from "@repo/common/types";
import { prismaClient } from "@repo/db";
import { Request, Response } from "express";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const signup = async(req : Request, res : Response) => {
    const parsedObject = userObject.safeParse(req.body)

    if(!parsedObject.success){
        res.status(403).json({
            msg : `zod error ${JSON.stringify(parsedObject.error.errors)}`
        })
        return
    }

    try {
        const hasedPassword = await bcrypt.hash(parsedObject.data.password, 10)
        const user = await prismaClient.user.create({
            data : {
                name : parsedObject.data.name,
                password : hasedPassword
            }, select : {
                id : true
            }
        })

        res.status(200).json({
            msg : "user created ",
            userId : user.id
        })
    } catch (error) {
        if(error instanceof Error && (error as any).code === "P2002"){
            res.status(403).json({
                msg : "user already exits"
            })
            return
        }

        res.status(500).json({
            msg : `Signup error : ${error}`
        })
    }
}


export const signin = async (req: Request, res :Response) => {
    const parsedObject = userObject.safeParse(req.body)

    if(!parsedObject.success){
        res.status(403).json({
            msg : `zod error : ${JSON.stringify(parsedObject.error.errors)}`
        })
        return
    }

    try {
        const user = await prismaClient.user.findUnique({
            where : {
                name : parsedObject.data.name
            }
        })

        if(!user){
            res.status(403).json({
                msg : 'user not found with name'
            })
            return
        }

        const comparePassword = await bcrypt.compare(parsedObject.data.password, user.password)
        
        if(!comparePassword){
            res.status(403).json({
                msg : "password not matched bro"
            })
            return
        }


        const generatedAccessToken = jwt.sign({userId : user.id}, process.env.Access_token as string)
        const generatedRefreshToken = jwt.sign({userId : user.id}, process.env.refreshToken as string)

        const options = {
            httpOnly : true,
            secure : true
        }

        res.status(200)
        .cookie("accessToken", generatedAccessToken, options)
        .cookie("refreshToken", generatedRefreshToken, options)
        .json({
            msg : "user logged In"
        })
    } catch (error) {
        res.status(500).json({
            msg : `server error at signin ${error}`
        })
    }
}