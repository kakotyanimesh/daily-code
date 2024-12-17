import { signupObject } from "@/app/utils/zod";
import prisma from "@/app/lib/db";
import bcrypt from 'bcryptjs'
import { NextRequest, NextResponse } from "next/server";
import { token } from "@/app/utils/jose";


export async function POST(req: NextRequest) {
    const parsedObject = signupObject.safeParse(await req.json())

    if(!parsedObject.success){
        return NextResponse.json(
            {error : parsedObject.error.errors},
            {status : 400}
        )
    }

    const {username, password} = parsedObject.data

    try {
        const user = await prisma.user.findFirst({
            where : {
                username : username
            }
        })

        if(!user){
            return NextResponse.json(
                {msg : 'no user exists'},
                {status: 400}
            )
        }

        const comparedPassword =await bcrypt.compare(password, user.password)

        if(!comparedPassword){
            return NextResponse.json(
                {msg : 'no user exits'},
                {status : 404}
            )
        }

        const generatedToken = await token(user.id)
        // await before creating the token 
        
        
        return NextResponse.json(
            {   token : generatedToken,
                msg : 'user logged in'
            },
            {status : 200}
        )

    } catch (error) {
        return NextResponse.json({
            msg : `Something went wrong while signin error : ${error}`
        })   
    }
} 