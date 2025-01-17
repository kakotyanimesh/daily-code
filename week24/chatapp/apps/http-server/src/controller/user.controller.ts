import { Request, Response } from "express";
import { signinObject, signupObject } from "@repo/common/types";
import { prisma } from "@repo/db";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"




export const signup = async(req: Request, res:Response) => {
    const parsedObj = signupObject.safeParse(req.body)

    if(!parsedObj.success){
        res.status(409).json({
            err : `zod err : ${JSON.stringify(parsedObj.error.errors)}`
        })
        return
    }

    const { email, password, displayname } = parsedObj.data
    try {
        const hasedPassword = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data : {
                email,
                password : hasedPassword,
                displayname
            }
        })

        res.status(200).json({
            msg : 'user created', 
            userId : user.id
        })
    } catch (error) {
        //@ts-ignore
        if(error instanceof Error && error.code === "P2002"){
            res.status(403).json({
                msg : "user already exits with the email bro"
            })
            return
        }

        res.status(500).json({
            msg : `error in signup ${error}`
        })
    }
}


export const signin = async (req : Request, res: Response) => {
    const parsedObj = signinObject.safeParse(req.body)

    if(!parsedObj.success){
        res.status(409).json({
            err : `zod error ${JSON.stringify(parsedObj.error.errors)}`
        })
        return
    }

    const {email, password} = parsedObj.data

    try {
        const user = await prisma.user.findFirst({
            where : {
                email : email
            }
        })

        if(!user){
            res.status(401).json({
                msg : "no user with that email"
            })
            return
        }
        
        const comparePassword = await bcrypt.compare(password, user.password)
        console.log(comparePassword);
        

        if(!comparePassword){
            res.status(409).json({
                msg : "pasword doesnot matched"
            })
            return
        }

        const generatedAccessToken = jwt.sign({userId : user.id}, process.env.ACCESS_TOKEN_SECRET as string, {expiresIn : process.env.ACCESS_TOKEN_EXPIRY})
        const generatedRefreshToken = jwt.sign({userId : user.id}, process.env.REFRESH_TOKEN_SECRET as string, {expiresIn : process.env.REFRESH_TOKEN_EXPIRY})


        const cookieOptions = {
            httpOnly : true,
            secure : true
        }

        res.status(201)
        .cookie('accessToken', generatedAccessToken, cookieOptions)
        .cookie('refreshToken', generatedRefreshToken, cookieOptions)
        .json({
            msg : "user logged in bro "
        })
    } catch (error) {
        res.status(500).json({
            msg : `Error while signin ${error}`
        })
    }
}