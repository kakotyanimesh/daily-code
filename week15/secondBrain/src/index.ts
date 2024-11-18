import express, { Request, Response} from 'express'
import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import userRouter  from './routes/user.routes'
import { contentRouter } from './routes/content.routes'

const app = express()
app.use(express.json())
const port: number = Number(process.env.PORT)
// console.log(port);



app.use('/api/v1', contentRouter)
app.use('/api/v1', userRouter)


const main = async() => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log(`the app is connected to ${process.env.MONGO_URI}`);
    } catch (error) {
        console.log(`something went wrong while connecting to the server ${error}`);
    }
}

app.listen(port, () => {
    main()
    console.log(`the app is running at http://localhost:${port}`);
    
})