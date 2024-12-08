import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { verifyJwt } from "../utils/jwt";

export const auth = (req: Request, res: Response, next : NextFunction) => {
    try {
        const accessTokenId = req.headers.authorization

        if(!accessTokenId) {
            res.status(400).json({
                msg : 'No access token'
            })
            return
        }

        // bug or no bug in return idk

        const userId = verifyJwt(accessTokenId as string)
        // @ts-ignore
        req.userId = userId 
        next()
    } catch (error) {
        res.status(500).json({
            msg : 'no accessToken'
        })
    }
}