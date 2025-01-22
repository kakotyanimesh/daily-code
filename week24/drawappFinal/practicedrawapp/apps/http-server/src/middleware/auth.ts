import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"

export const authMiddleware = (req : Request, res : Response, next : NextFunction) => {
    const accessToken = req.cookies.accessToken

    if(!accessToken){
        res.status(403).json({
            msg : "no accessToken"
        })
        return
    }

    try {
        const decoded = jwt.verify(accessToken, process.env.Access_token as string) as JwtPayload

        const userId = decoded.userId 
        req.userId = userId
        next()
    } catch (error) {
        throw error
    }
}