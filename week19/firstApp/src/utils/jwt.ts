import jwt from 'jsonwebtoken'
import { string } from 'zod'
require('dotenv').config()

export const accessToken = (id : number) => {
    return jwt.sign({
        id
    },process.env.AcessTokenKey as string, {expiresIn : process.env.AccessTokenExpiry})
}

export const verifyJwt = (accessTokenId : string) => {
    return jwt.verify(accessTokenId, process.env.AccessTokenKey as string)
}