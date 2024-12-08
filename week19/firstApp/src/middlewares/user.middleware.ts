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

        const id = verifyJwt(accessTokenId)
        // @ts-ignore
        req.userId = id
        next()
    } catch (error) {
        res.status(500).json({
            msg : 'here no accessToken'
        })
    }
}