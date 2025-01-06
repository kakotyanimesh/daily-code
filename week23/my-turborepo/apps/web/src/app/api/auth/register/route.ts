import { NextRequest, NextResponse } from "next/server";
import { userObject } from "@repo/zod"
import bcrypt from "bcryptjs"
import prisma from "@repo/db"

export async function POST(req:NextRequest) {
    const parsedObject = userObject.safeParse(await req.json())

    if(!parsedObject.success){
        return NextResponse.json(
            {err : parsedObject.error.errors},
            {status : 400}
        )
    }

    const {email, password} = parsedObject.data

    try {
        const hasedPassword = await bcrypt.hash(password, 10)
        await prisma.user.create({
            data : {
                email,
                password : hasedPassword
            }
        })

        return NextResponse.json(
            {msg : 'user created'},
            {status : 200}
        )
    } catch (error) {
        // @ts-ignore
        if(error instanceof Error || error.code === "P2002"){
            return NextResponse.json(
                { msg : 'user already exits'},
                {status : 409}
            )
        }
        return NextResponse.json(
            {msg : `ERROR while user creation : ${error}`},
            {status : 500}
        )
    }
}