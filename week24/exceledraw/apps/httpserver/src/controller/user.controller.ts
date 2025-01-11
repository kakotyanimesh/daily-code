import { Request, Response } from "express";
import {signinObject, signupObject} from "@repo/common/types"
import jwt, { JwtPayload } from "jsonwebtoken"

console.log(process.env.jwt_secret);


export const signup = (req : Request, res : Response) => {
    const parsedObject = signupObject.safeParse(req.body)

    if(!parsedObject.success){
        res.status(400).json({
            msg : `Zod error : ${parsedObject.error.errors}` 
        })
        return
    }

    const {username, password, email} = parsedObject.data

    try {
        // db logic but 
        res.status(200).json({
            msg : ";user registered"
        })
        
    } catch (error) {
        res.status(500).json({
            msg : "server error ",
            err : process.env.node_env === "developement" ? error : undefined
        })
    }
}


export const signin = (req : Request, res : Response) => {
    const parsedObject = signinObject.safeParse(req.body)

    if(!parsedObject.success){ 
        res.status(400).json({msg : `zod err : ${parsedObject.error.errors}}`})
        return
    } 

    const { username , password} = parsedObject.data

    try {
        // const userID = 1

        const token = jwt.sign({username}, process.env.jwt_secret as string)

        res.status(200).json({
            token : token,
            msg : "user logged in bro "
        })


    } catch (error) {
        res.status(500).json({
            msg : process.env.node_env === "development" ? `server err : ${error}` : 'server is dead bro'
        })
    }
}

