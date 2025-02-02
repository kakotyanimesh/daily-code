import express, { Request, Response } from "express"
import {prismaClient} from "@repo/prisma"


const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        msg : "hii"
    })
})


app.post("/signup", async(req : Request, res : Response) => {
    const {username, password} = req.body

    const user = await prismaClient.user.create({
        data : {
            username,
            password
        }
    })


    res.status(200).json({
        msg : `signup successfull`,
        id : user.id
    })


})


app.listen(4000)