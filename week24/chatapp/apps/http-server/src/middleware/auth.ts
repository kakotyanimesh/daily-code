import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"

export const authMiddleware = (req : Request, res: Response, next : NextFunction) => {
    const accessToken = req.cookies.accessToken

    if(!accessToken){
        res.status(409).json({
            msg : "no access token bro give me one give it to me dadday"
        })
        return 
    }

    const verify = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET as string) as JwtPayload

    if(!verify){
        res.status(403).json({
            msg : "invalid token"
        })
        return
    }

    req.userId = verify.userId
    next()
}