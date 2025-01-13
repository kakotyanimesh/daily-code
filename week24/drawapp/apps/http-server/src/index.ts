import express, { Request, Response } from "express"
import { userObject } from "@repo/zod"


const app = express()


app.post("/", (req : Request, res: Response ) => {

    const parsedObject = userObject.safeParse(req.body)

    if(!parsedObject.success){
        res.json({
            err : `${parsedObject.error.errors}`
        })
        return
    }

    const { username, password } = parsedObject.data
    res.json({
        username,
        password
    })
})




app.listen(4000)