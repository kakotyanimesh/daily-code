import { Router, Request, Response} from 'express'

export const contentRouter = Router()

contentRouter.get('/content', (req: Request, res : Response) => {
    res.send('hiii')
})