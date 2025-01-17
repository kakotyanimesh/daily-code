import express from "express"
import userRoute from "./routes/user.routes"
import cookieParser from "cookie-parser"
require("dotenv").config()


const app = express()
app.use(express.json())
app.use(cookieParser())

app.use('/api/v1/user', userRoute)


app.listen(4000, () => {
    console.log(`the app is running at http:localhost:4000`);
    
})