import express, { Request, Response } from "express"
import userRouterR from "./routes/user.routes"
import roomRouter from "./routes/room.routes"

const app = express()

app.use(express.json())

app.use('api/v1/user', userRouterR)

app.use('/api/v1/room', roomRouter)

app.listen(4000)