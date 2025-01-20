import { NextFunction, Request, Response } from "express";
import jwt, { JwtHeader, JwtPayload } from "jsonwebtoken"

export const authMiddleware = (req : Request, res : Response, next : NextFunction)  => {
    const accessToken = req.cookies.accessToken

    if(!accessToken){
        res.status(408).json({
            msg : "no access token in cookies ig"
        })
        return
    }

    try {
        const decoded = jwt.verify(accessToken, process.env.Access_Token as string) as JwtPayload

        if(!decoded){
            res.status(403).json({
                msg : "invalid access token unable to verify"
            })
            return
        }
        const userId = decoded.userId 
        req.userId = userId
        next()

    } catch (error) {
        res.json({
            msg : 'unauthorized jwt '
        })
    }

    
}