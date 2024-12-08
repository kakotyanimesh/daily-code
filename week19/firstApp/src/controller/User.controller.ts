import { Request, Response } from "express"
import { signInObject, signupObject } from "../utils/zod"
import { prisma } from "../utils/PrismClient"
import { error } from "console"
import { accessToken } from "../utils/jwt"
import { comparePassword, passwordHash } from "../utils/hashPassword"

export const signup = async(req : Request, res : Response) => {
    const parsedObject = signupObject.safeParse(req.body)

    if(!parsedObject.success){
        res.status(403).json({
            msg : 'Invalid user Inputs',
            err : parsedObject.error.errors
        })
        return 
    }

    const {username, email, password} = parsedObject.data
    try {
        const hasedPassword = await passwordHash(password)
        const createdUser = await prisma.user.create({
            data : {
                username,
                password : hasedPassword, 
                email
            },
            select : {
                username : true
            }
        })

        res.status(200).json({
            msg : 'user created',
            createdUser
        })
    } catch (error ) {
        res.status(500).json({
            msg : `Error while creating the user error : ${error}`
        })
    }
}
export const signin = async(req : Request, res : Response) => {
    const parsedObject = signInObject.safeParse(req.body)

    if(!parsedObject.success){
        res.status(403).json({
            msg : 'Invalid user details',
            error : parsedObject.error.errors
        })
        return
    }

    const {username, password} = parsedObject.data
    try {
        const user = await prisma.user.findFirst({
            where : {username}
        })

        if(!user){
            res.status(403).json({
                msg : 'no user found'
            })
            return
        }

        const matchedPassword = await comparePassword(password, user.password)

        if(!matchedPassword){
            res.status(403).json({
                msg : 'no valid username or password'
            })
            return
        }

        const accessTokenid = accessToken(user.id)

        res.status(200).json({
            msg : 'user logged in successfully',
            accessTokenid : accessTokenid
        })
    } catch (error) {
        res.status(500).json({
            msg : `Error while sign in error : ${error}`
        })
    }
}
export const getUser = (req : Request, res : Response) => {
    
}