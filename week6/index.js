const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const port = 3000

app.use(express.json())

const jwt_secret = 'user_app'
let users = []

app.post('/signUp', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    users.push({
        username, 
        password
    })

    res.send({
        message : "sign up successfull "
    })
})

// const generateToken = () => {
//     const options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

//     let token = ''

//     for(let i = 0; i < 32; i++){
//         token += options[Math.floor(Math.random() * options.length)]
//     }

//     return token
// }


app.post('/singIn', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    
    

    const user = users.find(user => user.username === username && user.password === password)
    // finding our user 

    if(user) {
        // const token = generateToken()
        const token = jwt.sign({
            username : user.username
        }, jwt_secret)

        user.token = token

        res.send({
            token
        })
        console.log(users); 
    } else {
        res.status(403).json({
            message: "user not found !! "
        })
    }
})


// app.get('/me', (req, res) => {
//     const token = req.headers.authorization
//     const userDetails = jwt.verify(token, jwt_secret)
//     // we got userDetails object => consists of username , password\
//     console.log(userDetails);
     
//     const username = userDetails.username


//     const user = users.find(user => user.username === username)

//     if(user){
//         res.send({
//             username: user.username
//         })
//     } else {
//         res.status(401).json({
//             message : "Unauthorizde !! "
//         })
//     }
// })


app.get("/me", (req, res) => {
    // const auth = req.headers.authorization
    // console.log(auth);
    const token = req.headers.authorization
    const userDetails = jwt.verify(token, jwt_secret)
    // we have to send token as auth inside headers in postman 

    const username =  userDetails.username;
    const user = users.find(user => user.username === username);

    if (user) {
        res.send({
            username: user.username
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
})

app.listen(port , () => console.log(`the app is running at  http://localhost:${port}`))




// const express = require('express')
// const jwt = require('jsonwebtoken')
// const app = express()
// const port = 3000

// app.use(express.json())

// const jwt_secret = "we_have_to_write"

// let users = []
// app.post('/signUP', (req, res) => {
//     const {username, password} = req.body

//     users.push({
//         username, 
//         password
//     })

//     res.status(200).json({
//         message : "user created !!"
//     })
    
// })

// app.post('/signIn', (req, res) => {
//     const {username, password} = req.body

//     const user = users.find(user => user.username === username && user.password === password)

//     if(user) {
//         const token = jwt.sign({
//             username: user.username
//         }, jwt_secret)

//         user.token = token

//         res.send({
//             token
//         })
//         console.log(user);
        
//     } else {
//         res.status(401).json({
//             message : "unable to create "
//         })
//     }
// })

// const auth = (req, res, next) => {
//     const token = req.headers.authorization
//     // token always send in authorization headers
    
//     if(token){
//         jwt.verify(token, jwt_secret, (err, decode) => {
//             if(err) {
//                 res.status(401).json({
//                     message: "unauthorize"
//                 })
//             } else {
//                 req.user = decode
//                 next()
//             }
//         })
//     } else {
//         res.status(403).json({
//             message: "unauth"
//         })
//     }
// }

// app.get('/me',auth, (req, res) => {
//     const user = req.user

//     res.send({
//         username : user.username
//     })
// })


// app.listen(port , () => console.log(`the app is running at http://localhost:${port}`))