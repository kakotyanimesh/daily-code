const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()


app.use(express.json())
const jwt_secret = "ak"

// app.use(express.static("./public"))
let users = []

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html")
})
app.post('/signUp', (req, res) => {
    const {username, password } = req.body

    const user = users.find(user => user.username === username)

    if(user){
        res.send({
            message : "username unavailable"
        })
    } else{
        users.push({
            username, 
            password
        })
        res.status(200).json({
            message : "user created "
        })
    }

    

    

})


app.post('/singIn', (req, res) =>{
    const {username, password} = req.body


    const user = users.find(user => user.username === username && user.password === password)

    if(user){
        const token = jwt.sign({
            username: user.username
        }, jwt_secret)

        user.token = token

        res.send({
            token
        })
        console.log(user);
        

    } else {
        res.status(402).json({
            message : "user not exist "
        })
    }


})

const auth = (req, res, next) => {
    const token = req.headers.token

    if (token) {
        jwt.verify(token, jwt_secret, (err, decode) => {
            if(err) throw err

            // console.log(decode);
            req.user = decode
            next()
        })
    } else {
        res.send({
            message : "unauthorized "
        })
    }
}


app.get('/me', auth, (req, res) =>{
    const user = req.user
    res.send({
        message : user
    })
})



app.listen(3000)



// localstorage.setitem => to store token !!