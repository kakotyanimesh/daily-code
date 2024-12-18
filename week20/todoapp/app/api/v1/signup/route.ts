import { signupObject } from "@/app/utils/zod";
import prisma from "@/app/lib/db";
import bcrypt from 'bcryptjs'
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest) {
    const parsedObject = signupObject.safeParse(await req.json())
    
    if(!parsedObject.success){
        return NextResponse.json(
            {error : parsedObject.error.errors },
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

        if(user) {
            return NextResponse.json(
                {msg : 'user exists already'}
            )
        }

        const hasedPassword = await bcrypt.hash(password, 10)
        // console.log(hasedPassword);
        

        const createdUser = await prisma.user.create({
            data : {
                username,
                password : hasedPassword
            },
            select : {
                id : true,
                username : true
            }
        })

        return NextResponse.json(
            {
                mes : 'user created successfully',
                user : createdUser
            },
            {
                status : 200
            }
        )
    } catch (error) {
        return NextResponse.json({
            msg : `something went wrong while signup , error : ${error}`
        })
    }
    
}

