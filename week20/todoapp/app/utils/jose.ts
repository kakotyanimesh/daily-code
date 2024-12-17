require('dotenv').config()
import { SignJWT } from 'jose'

const secretKey = new TextEncoder().encode(
    process.env.token_Secret
)

export const token = async(userId : number) => {
    const jwtToken = await new SignJWT({userId : userId})
                    .setProtectedHeader({alg :'HS256'})
                    .setIssuedAt()
                    .setExpirationTime(process.env.expireIn || '2h')
                    .sign(secretKey)

    return jwtToken

}

