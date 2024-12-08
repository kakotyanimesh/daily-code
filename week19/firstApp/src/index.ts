
import express, { Request, Response } from 'express'
import { userRouter } from './routes/User.routes'
import { todoRouter } from './routes/todo.routes'

const app = express()

app.use(express.json())
const port = 3000


app.use('/api/v1/user', userRouter)
app.use('/api/v1/todo', todoRouter)


app.listen(port , () => {
    console.log(`the app is running at http://localhost:${port}`);
    
})