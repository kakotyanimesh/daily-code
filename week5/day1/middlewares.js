/* 1. Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console 
   2. Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it
*/


const express = require("express")
const app = express()

const port = 3001
let httpCount = 0
// middlewares have to write inside app.use()
app.use((req, res, next) => {
    const date = new Date().toLocaleTimeString()
    console.log(`the http method is ${req.method}, with url: ${req.hostname} and time is ${date}`);
    // middle is something that has access to req, res handlers => it will execute everytime for any http request 
    // use post man to confirm the code => as browser's default behaviour is to send get request everytime even after defining a method also 
    httpCount++

    next()
    
})

// counter middleware

// app.use((req, res, next) => {
//     httpCount++
//     // console.log(`the number of httpCount is ${httpCount}`)
//     next()
// })

app.get('/count', (req, res) =>{
    res.send(`the number of http req is ${httpCount}`)
})
app.get('/get', (req, res) => {
    res.send(" this is  get req ")
    
})
app.post('/post', (req, res) => {
    res.send(" this is  post req ")
})
app.put('/put', (req, res) => {
    res.send(" this is  put req  ")
})
app.delete('/delete', (req, res) => {
    res.send("the delete request")
})
app.patch('/patch', (req, res) => {
    res.send("the patch request")
})





app.listen(port, () => console.log(`the app is running at port http://localhost:${port}`))