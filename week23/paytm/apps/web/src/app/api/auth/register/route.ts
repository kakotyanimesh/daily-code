import { NextRequest, NextResponse } from "next/server";
import { userObject } from "@repo/zod"

import bcrypt from "bcryptjs"
import prisma from "@repo/db";
import { json } from "stream/consumers";


export async function POST(req:NextRequest) {
    const parsedObject = userObject.safeParse(await req.json())

    if(!parsedObject.success) {
        return NextResponse.json(
            {err : `Error% : ${parsedObject.error.errors}`},
            {status : 400}
        )
    }


    const { username, password} = parsedObject.data

    try {
        const hasedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data : {
                username,
                password : hasedPassword
            }, select : {
                id : true
            }
        })

        await prisma.account.create({
            data : {
                userID : user.id,
                username : username,
                balance : 1000
            }
        })
        

        return NextResponse.json(
            {msg : 'user created '},
            {status : 200}
        )
        
    } catch (error) {
        // @ts-ignore
        if(error instanceof Error || error.code === "P2002"){
            return NextResponse.json(
                {msg : "username unavialable or user exits "},
                {status : 409}
            )
        }
        return NextResponse.json(
            {msg : 'something went wrong in server ', err : process.env.NODE_ENV === "development" ? error : undefined},
            {status : 500}
        )
    }
}