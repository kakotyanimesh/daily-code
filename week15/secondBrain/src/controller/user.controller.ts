import { Request, Response } from "express"
import { signupObject } from "../utils/zod"

export const signUp = (req : Request, res : Response) => {
    const parsedObject = signupObject.safeParse(req.body)

    if(!parsedObject.success) return res.status(403)
}