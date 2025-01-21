import jwt, { JwtPayload } from "jsonwebtoken"


export const extractToken = (url : string) : string | null=> {
    const queryParams = new URLSearchParams(url.split("?")[1])

    return queryParams.get("token")
}


export const verifyToken = (token : string) => {
    try {
        const decoded = jwt.verify(token, process.env.Access_Token as string) as JwtPayload
        //{"userId":"40f0e504-e5b1-4fdd-9cab-7fcee20e4dab","iat":1737432559,"exp":1737436159} => JWTPAYLOAD

        const userId = decoded.userId 
        return userId
    } catch (error) {
        throw error
    }
    
}

 