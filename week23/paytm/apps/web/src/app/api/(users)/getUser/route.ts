import prisma from "@repo/db";
import { NextRequest, NextResponse } from "next/server";



type ErroRespnse = {
    msg : string,
    err ? : unknown
}

type successResponse = {
    users : Array<{username : string}>
}

export async function GET(req: NextRequest) {
    const username = req.nextUrl.searchParams.get("username")

    if(!username){
        return NextResponse.json<ErroRespnse>(
            {msg : "emtpy username in params"},
            {status : 400}
        )
    }
    
    try {
        const users = await prisma.user.findMany({
            where : {
                username : {
                    contains : username,
                    mode : "insensitive"
                }
            },select : {
                username : true
            },
            take : 10 
        })

        if(!users) {
            return NextResponse.json<ErroRespnse>({
                msg : "user not found !! bro "
            })
        }

        return NextResponse.json<successResponse>(
            {users} ,
            {status : 200}
        )
    } catch (error) {
        return NextResponse.json<ErroRespnse>(
            {
                msg : 'something went wrong at the server level',
                err : process.env.NODE_ENV === "development" ? error : undefined
            },
            {status : 500}
        )
    }
}