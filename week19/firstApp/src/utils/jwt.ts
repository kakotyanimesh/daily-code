import jwt from 'jsonwebtoken'
import { string } from 'zod'
import * as dotenv from 'dotenv'
dotenv.config()

export const accessToken = (id : number) => {
    return jwt.sign({
        id
    },process.env.AcessTokenKey as string, {expiresIn : process.env.AccessTokenExpiry})
}

// console.log(process.env.AcessTokenKey);
// console.log(process.env.AccessTokenExpiry);

export const verifyJwt = (accessTokenId : string) => {
    const payload = jwt.verify(accessTokenId, process.env.AcessTokenKey as string)
    // @ts-ignore
    return payload.id
}

// console.log(verifyJwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNzMzNjkzOTA4LCJleHAiOjE3MzM3MDExMDh9.fbsL3FCdnRTqKfownHwPzBMxSVVDSlY3inv38rg7jjA'));
