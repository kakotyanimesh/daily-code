import express, { Request, Response } from 'express'


const app = express()


app.get('/', (req : Request, res : Response) => {
    res.json({
        msg : "hii from express server"
    })
})


app.listen(5000)