import { Request, Response } from "express";
import { signinObject, signupObject } from "@repo/common/types"
import { prisma } from "@repo/db";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const signup = async(req : Request, res : Response) => {
    const parsedObj = signupObject.safeParse(req.body)

    if(!parsedObj.success){
        res.status(401).json({
            err : `zod err : ${JSON.stringify(parsedObj.error.errors)}`
        })
        return
    }


    const {name, email, password} = parsedObj.data

    try {
        const hasedPassword = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data : {
                name, 
                email,
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
        // @ts-ignore
        if(error instanceof Error && error.code === 'P2002'){
            res.status(409).json({
                msg : "user with email already exits"
            })
            return
        }
        res.status(500).json({
            msg : `server error : ${error}`
        })
    }
}


export const signin = async(req : Request, res : Response) => {
    const parsedObj = signinObject.safeParse(req.body)

    if(!parsedObj.success){
        res.status(403).json({
            msg : `zod err : ${JSON.stringify(parsedObj.error.errors)}`
        })
        return
    }

    const { email, password } = parsedObj.data

    try {
        const user = await prisma.user.findFirst({
            where : {
                email : email
            }
        })

        if(!user) {
            res.status(411).json({
                msg : 'user doeot exits with that email'
            })
            return
        }

        const comaprePassword = await bcrypt.compare(password, user.password)

        if(!comaprePassword){
            res.status(411).json({
                msg : "invalid password bro"
            })
            return
        }

        const generatedAccessToken = jwt.sign({userId : user.id}, process.env.ACCESS_TOKEN_SECRET as string, {expiresIn : process.env.ACCESS_TOKEN_EXPIRY})
        
        const generatedRefreshToken = jwt.sign({userId : user.id}, process.env.ACCESS_TOKEN_SECRET as string, {expiresIn : process.env.ACCESS_TOKEN_EXPIRY})


        const options = {
            httpOnly : true, 
            secure : true
        }

        res
        .status(200)
        .cookie("accessToken", generatedAccessToken, options)
        .cookie("refreshToken", generatedRefreshToken, options)
        .json({
            msg : "user logged in "
        })
        
        
    } catch (error) {
        res.status(500).json({
            msg : 'server dead in signin ' + error
        })
    }
}