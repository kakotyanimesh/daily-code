import { Request, Response } from "express";
import { userObject } from "@repo/zod";

export const signup = (req :Request, res :Response) => {
    const parsedObject = userObject.safeParse(req.body)


    if(!parsedObject.success){
        res.status(400).json({
            err : `${parsedObject.error.errors}`
        })

        return
    }

    const {email , password , name } = parsedObject.data

    try {
        res.json({
            email : email,
            password : password,
            name : name
        })
    } catch (error) {
        // @ts-ignore
        if(error instanceof Error && error.code === "P2002"){
            res.json({
                msg : "user exits"
            })
            return
        }

        res.json({
            msg  : `error while signup : ${error}`
        })
    }
}