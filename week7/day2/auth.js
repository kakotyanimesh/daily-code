const jwt = require('jsonwebtoken')

const jwt_secret = 'asdasdasdsad'

const auth = (req, res, next) => {
    const token = req.headers.token
    const response = jwt.verify(token, jwt_secret) // gives true or false 
    if(response){
        req.userId = token.userId
        next()
    } else {
        res.status(403).json({
            message : "unauthorized "
        })
    }
}


module.exports = {
    auth, 
    jwt_secret
}
