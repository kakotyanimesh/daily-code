import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"

export const auth = async (req : Request, res : Response, next : NextFunction) => {
    const token = req.headers["authorization"] ?? ""

    // if(!token){
    //     res.status(404).json({
    //         msg : "no access token bro"
    //     })
    //     return
    // }

    try {
        const decoded = await jwt.verify(token, process.env.jwt_secret as string)

        if(decoded){
            // @ts-ignore
            req.userId = decoded.userId as JwtPayload
            next()
        }
    } catch (error) {
        
    }
}