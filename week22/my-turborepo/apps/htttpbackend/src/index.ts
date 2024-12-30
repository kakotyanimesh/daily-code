import express, { Request, Response } from "express"

const app = express()

app.get('/', (req : Request, res: Response) => {
    res.json({
        msg : "hi therer"
    })
})


app.listen(5000, () => {
    console.log('the app is running at http://localhost:5000');
    
})