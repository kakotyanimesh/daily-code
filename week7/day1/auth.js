const jwt = require("jsonwebtoken")
const jwt_secret = 'Se3rt'


const auth = (req, res, next) => {
    const token = req.headers.authorization

    const response = jwt.verify(token, jwt_secret)

    if(response){
        req.userId = token.userId
        next()
    } else {
        res.status(403).json({
            message : "unauthorized !!"
        })
    }
}


module.exports = {
    auth, 
    jwt_secret
}