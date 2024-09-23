const jwt = require('jsonwebtoken')
require('dotenv').config()
const jwt_secret = process.env.jwt_secret


const userAuth = (req, res, next) => {
    const token = req.headers.authorization

    if(!token){
        return res.status(401).json({
            message : 'unable to find token, signed in again'
        })
    }

    try {
        const decodedToken = jwt.verify(token, jwt_secret)

        req.id = decodedToken.id  // attached to req object's id 
        next()
    } catch (error) {
        res.status(401).json({
            message : 'invalid token',
            error : error
        })
    }

    
    
}

module.exports = {
    userAuth
}