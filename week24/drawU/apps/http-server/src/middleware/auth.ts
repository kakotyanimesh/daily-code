import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"



export const authMiddleware = (req : Request, res : Response, next : NextFunction) => {
    const accessToken = req.cookies.accessToken

    if(!accessToken){
        res.status(401).json({msg : "unauthorized no access token"})
        return
    }
    
    

    try {
        const verify = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET as string) as JwtPayload

        if(!verify){
            res.status(401).json({
                msg : "unauthorized token"
            })
            return
        }

        
        
        req.userId = verify.userId
        
        next()

    } catch (error) {
        throw error
    }
}