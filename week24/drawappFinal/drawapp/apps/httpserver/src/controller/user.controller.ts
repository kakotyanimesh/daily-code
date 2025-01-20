import { Request, Response } from "express";
import { signinObject, signupObject } from "@repo/common-config/types";
import { prismaClient } from "@repo/db";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const signup = async (req : Request, res : Response) => {
    const parsedObject = signupObject.safeParse(req.body)

    if(!parsedObject.success){
        res.status(401).json({
            msg : `zod error : ${process.env.node_env  === "develepement" ? parsedObject.error.errors : undefined}`
        })
        return
    }

    const { email, password, name } = parsedObject.data

    try {
        const hasedPassword = await bcrypt.hash(password, 10)
         const user = await prismaClient.user.create({
            data : {
                email,
                passowrd : hasedPassword,
                name
            }
         })

         res.status(200).json({
            msg : "user created bro "
         })
    } catch (error) {
        if(error instanceof Error && (error as any).code === "P2002"){
            res.status(401).json({
                msg : `user exits already error : ${process.env.node_env  === "develepement" ? error : undefined}`
            })
            return
        }

        res.status(500).json({
            msg : `Error at signup `
        })
    }
}


export const signin = async(req : Request, res: Response) => {
    const parsedObject = signinObject.safeParse(req.body)

    if(!parsedObject.success){
        res.status(401).json({
            msg : `zod error : ${process.env.node_env  === "develepement" ? parsedObject.error.errors : undefined}`
        })
        return
    }
    const {email, password} = parsedObject.data
    try {
        const user = await prismaClient.user.findUnique({
            where : {
                email
            }
        })

        if(!user){
            res.status(409).json({
                msg : "user doesnot exits with the email signup bro"
            })
            return
        }

        const comparePassowrd = await bcrypt.compare(password, user.passowrd)

        if(!comparePassowrd){
            res.status(400).json({
                msg : "invalid password this time"
            })
            return
        }

        const accessToken = jwt.sign({userId : user.id}, process.env.Access_Token as string, {expiresIn : process.env.Access_TokenExpiry})
        const refreshToken = jwt.sign({userId : user.id}, process.env.RefreshToken as string, {expiresIn : process.env.RefreshTokenExpiry})

        const options = {
            httpOnly : true,
            secure : true
        }

        res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json({
            msg : "user logged in bro"
        })
    } catch (error) {
        res.status(500).json({
            msg : `Erorr while singin ${process.env.node_dev === "developement" ? error : undefined}`
        })
    }
}