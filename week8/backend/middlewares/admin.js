const jwt = require('jsonwebtoken')


const adminAuth = (req, res, next) => {
    const token = req.headers.authorization

    if(!token){
        return res.status(403).json({
            message : 'no token provided'
        })
    }

    try {
        const decodedToken = jwt.verify(token, process.env.jwt_secret)
        req.id = decodedToken.id
        next()
    } catch (error) {
        res.status(403).json({
            message : 'unauthorized',
            error : error
        })
    }
}


module.exports = {
    adminAuth
}