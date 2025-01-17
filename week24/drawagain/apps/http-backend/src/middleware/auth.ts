import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"

export const authMiddleware = (req : Request, res : Response, next : NextFunction) => {
    const accessToken = req.cookies.accessToken
    if(!accessToken){
        res.status(408).json({
            msg : "no access token in cookies ig"
        })
        return
    }

    try {
        const verify = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET as string) as JwtPayload
    
        if(!verify){
            res.status(403).json({
                msg : "invalid access token unable to verify"
            })
            return
        }
    
        
        const userId = verify.userId
        req.userId = userId
        next()
    } catch (error) {
        console.log(`middleware err : ${error}`)
        
    }
}