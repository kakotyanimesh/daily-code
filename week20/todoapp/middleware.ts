import { importJWK, jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";


export const config = {
    matcher : ['/api/v1/todo/:path*']
}

export async function middleware (req : NextRequest) {
    const accessToken = req.headers.get('Authorization')
    const secret = process.env.token_Secret || ''
    

    if(!accessToken){
        return NextResponse.json(
            {msg : 'no access token in header'},
            {status : 404}
        )
    }

    try {
        const encodedSecret = Buffer.from(secret).toString('base64url');
        const jwk = await importJWK({k : encodedSecret, alg : 'HS256', kty : 'oct'})
        const decodedToken = await jwtVerify(accessToken, jwk )

        const newHeaders = new Headers(req.headers)
        newHeaders.set('userId', decodedToken.payload.userId as string)
        return NextResponse.next({
            request : {
                headers : newHeaders
            }
        })
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({
            msg : `error while verigy jwt error : ${error}`
        })
    }
}