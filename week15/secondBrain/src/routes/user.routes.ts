import { Router, Request, Response } from "express";

const userRouter = Router()


userRouter.get('/h', (req: Request, res: Response) => {
    res.send('hellow')
})

export default userRouter