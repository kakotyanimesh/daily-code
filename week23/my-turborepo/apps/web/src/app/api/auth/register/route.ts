import { NextRequest, NextResponse } from "next/server";
import { userObject } from "@repo/zod"
import prisma from "@repo/db";
import bcrypt from "bcryptjs"


export default async function POST(req:NextRequest) {
    const parsedObject = userObject.safeParse(await req.json())

    if(!parsedObject.success) {
        return NextResponse.json(
            {err : parsedObject.error.errors},
            {status : 400}
        )
    }

    const { email, password} = parsedObject.data

    try {
        const hasedPassword = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data : {
                email : email,
                password : hasedPassword
            }
        })

        return NextResponse.json(
            {msg : "user created successfully "},
            {status : 200}
        )
    } catch (error) {
        // @ts-ignore
        if(error instanceof Error && error.code === "P2002"){
            return NextResponse.json(
                {msg : "user already exists bro"},
                {status : 409}
            )
        }

        return NextResponse.json(
            {msg : `Error while creating user ${error}`},
            {status : 500}
        )
    }
}