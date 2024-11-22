import express from 'express'
import { userRouter } from './routes/user.routes'


const app = express()
app.use(express.json())

app.use('/api/v1', userRouter)

const port = 3000


app.listen(port, () => {
    console.log(`app is running at port ${port}`);
    
})
