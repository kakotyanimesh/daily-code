import { Request, Response } from "express";
import { UserResponse, UserTypes } from "../types/user.types";

export const signUp = (req: Request<{}, {}, UserTypes>, res: Response<UserResponse>)  : any=> {
    const { username, email, password} = req.body

    if(!username || !email ||!password) {
        return res.status(401).json({
            msg : "put some details"
        })
    }

    res.status(200).json({
        username,
        msg : 'user created'
    })
}