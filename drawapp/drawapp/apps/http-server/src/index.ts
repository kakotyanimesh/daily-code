import express, { Request, Response } from "express"
import { userObject } from "@repo/zod"

const app = express()


app.post("/", (req : Request, res : Response) => {
    const obj = userObject.safeParse(req.body)

    if(!obj.success){
        res.json({
            err : `${obj.error.errors}`
        })
        return
    }

    const { username, password} = obj.data

    res.json({
        username,
        password
    })
}) 


app.listen(4000)