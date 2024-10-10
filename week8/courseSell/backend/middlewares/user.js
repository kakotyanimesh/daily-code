const jwt = require('jsonwebtoken')


const userAuth = (req, res, next) => {
    const token = req.headers.token

    if(!token){
        return res.status(403).json({
            message : 'no token provided'
        })
    }

    try {
        const decodedToken = jwt.verify(token, process.env.jwt_secret_user)
        req.id = decodedToken.id
        next()
    } catch (error) {
        res.status(403).json({
            message : 'user auth failed',
            error : error
        })
    }
    
}


module.exports = {
    userAuth
}