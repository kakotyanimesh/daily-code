import { NextRequest, NextResponse } from "next/server";
import {userObject} from "@repo/zod"
import prisma from "@repo/db";
import bcrypt from "bcryptjs"
import { signIn } from "next-auth/react";

export async function POST(req: NextRequest) {
    const parsedObject  = userObject.safeParse(await req.json())

    if(!parsedObject.success) {
        return NextResponse.json(
            {msg : parsedObject.error.errors},
            {status : 409}
        )
    }

    const { username , password, fullName } = parsedObject.data 
    try {

        const hasedPassword = await bcrypt.hash(password, 10)
        const createdUser = await prisma.user.create({
            data : {
                username,
                password : hasedPassword,
                fullName
            }, select : {
                id : true
            }
        })

        await prisma.account.create({
            data : {
                userId : createdUser.id
            }
        })

        return NextResponse.json(
            {msg : 'user created !!'},
            {status : 200}
        )
    } catch (error) {
        // @ts-ignore
        if(error instanceof Error || error.code === "P2002") {
            return NextResponse.json(
                {msg : "user already exits bro"}
            )
        }
        return NextResponse.json(
            {msg : `server error ${error}`},
            {status : 500}
        )
    }
}