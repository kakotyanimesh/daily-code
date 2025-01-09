import { NextRequest, NextResponse } from "next/server";
import {userObject} from "@repo/zod"
import bcrypt from "bcryptjs"
import prisma from "@repo/db"
import { signIn } from "next-auth/react";

type ErrorResponse = {
    msg : string,
    err?: unknown
}


type SuccessResponse = {
    msg : string
}

export async function POST(req:NextRequest) {
    const parsedObject = userObject.safeParse(await req.json())

    if(!parsedObject.success){
        return NextResponse.json<ErrorResponse>(
            {msg: `error : ${parsedObject.error.errors}`},
            {status : 400}
        )
    }

    const { username, password} = parsedObject.data
    try {
        const hasedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data : {
                username,
                password: hasedPassword
            }, select : {
                username: true
            }
        })

        await prisma.account.create({
            data : {
                accountHolder : user.username,
                balance : 1000
            }
        })

        // await signIn('credentials', {
        //     username : username,
        //     password : password
        // })

        return NextResponse.json<SuccessResponse>(
            {msg : 'user created ', },
            {status : 200}
        )
    } catch (error) {
        // @ts-ignore
        if(error instanceof Error || error.code === "P2002"){
            return NextResponse.json<ErrorResponse>(
                {msg : `user existed `, err : process.env.NODE_ENV === "development" ? error : undefined},
                {status : 407}
            )
        }

        return NextResponse.json<ErrorResponse>(
            {msg : 'something went wrong', err : process.env.NODE_ENV === "development" ? error : undefined}
        )
    }

}
