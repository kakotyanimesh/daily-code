import express from "express"
import userRouter from "./routes/user.routes"
import roomRouter from "./routes/room.routes"

const app = express()

app.use(express.json())


app.use('/api/v1/user', userRouter)
app.use('/api/v1/room', roomRouter)

app.listen(3003, () => {
    // db call 
    console.log(`app is running at https://localhost:3003`);
    
})