import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"

export const middleware = async(req : Request, res :Response, next : NextFunction) => {
    const token = req.headers["authorization"]

    if(!token){
        return
    }

    const decoded = await jwt.verify(token, process.env.jwt_secret as string)

    if(decoded){
        // @ts-ignore
        req.userId= decoded.userId as JwtPayload
        next()
    } else {
        res.status(500).json({
            msg : "unauthorized "
        })
    }


}