import express, { NextFunction, Request, Response } from 'express'
import userRouter from './routes/user.router'

const app = express()

app.use(express.json())
app.use('/api/v1/users', userRouter)

const port  = 3000



app.listen(port, () => {
    console.log(`app is running at ${port}`);
    
})