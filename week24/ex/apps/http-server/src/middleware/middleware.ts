import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import jwtSecret from "@repo/backendcommon"


export const auth = (req : Request, res : Response, next : NextFunction) => {
    const token = req.headers["authorization"] ?? ""


    const decoded = jwt.verify(token, jwtSecret)

    if(decoded){
        // @ts-ignore
        req.userId = decoded.userId 
        next()
    } else {
        res.json({
            msg : 'no token '
        })
    }
}