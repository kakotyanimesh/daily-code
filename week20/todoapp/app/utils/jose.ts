import { SignJWT } from "jose";


const secret = new TextEncoder().encode(
    process.env.token_Secret
)


export const token = async(userId : number) => {
    const jwt = await new SignJWT({userId : userId})
                .setProtectedHeader({alg : 'HS256'})
                .setIssuedAt()
                .setExpirationTime(process.env.expireIn || '1h')
                .sign(secret)
    
    return jwt
}