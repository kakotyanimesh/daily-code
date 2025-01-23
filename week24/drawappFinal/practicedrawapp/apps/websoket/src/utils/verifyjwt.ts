import jwt, { JwtPayload } from "jsonwebtoken"
export const verifyJwt = (url : string) : string | null => {
    try {
        const queryParams = new URLSearchParams(url.split("?")[1])
    
        const token  = queryParams.get("token")
    
    
        if(!token){
            return null
        }
    
        const decoded = jwt.verify(token, process.env.Access_token as string) as JwtPayload
    
    
        if(!decoded || typeof decoded !== "object"){
            return null
        }
        const userId = decoded.userId 
        return userId
    } catch (error) {
        throw new Error(`error at jwt verification : ${error}`)
    }

}