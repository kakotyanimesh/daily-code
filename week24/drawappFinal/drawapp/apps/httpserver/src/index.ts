import express from "express"
import roomRouter from "./routes/room.router"
import userRoute from "./routes/user.router"
import cookieParser from "cookie-parser"

const app = express()
require("dotenv").config({path : '../../.env'})

// define the path of dotenv

app.use(express.json())
app.use(cookieParser())
// app.use("api/v1/user", userRoute)
app.use("/api/v1/room", roomRouter)
app.use('/api/v1/user', userRoute)
//dont forget the slash bro 



app.listen(4001, () => {
    console.log("the app is running at http:localhost:4000");
    
})