import prisma from "@repo/db"
import { NextRequest, NextResponse } from "next/server"

type SuccessResponse = {
    users : Array<{username : string}>
}


type ErrorResponse = {
    msg : string,
    error ?: unknown
}


export async function GET(req : NextRequest) {
    const username = await req.nextUrl.searchParams.get('username')

    if(!username){
        return NextResponse.json<ErrorResponse>(
            {msg : 'empty field bro user apiroute/users?username="your username'},
            {status : 404}
        )
    }


    try {
        const users = await prisma.user.findMany({
            where : {
                username : {
                    contains : username,
                    mode : 'insensitive'
                }
            }, select : {
                username : true
            }
        })


        if(users.length === 0) {
            return NextResponse.json<ErrorResponse>(
                {msg : 'no user found'},
                {status : 404}
            )
        }

        return NextResponse.json<SuccessResponse>(
            {users},
            {status : 200}
        )
    } catch (error) {
        return NextResponse.json<ErrorResponse>(
            {msg : 'error while users seach', error : process.env.NODE_ENV === "development" ? error : undefined},
            {status : 500}
        )
    }
}


