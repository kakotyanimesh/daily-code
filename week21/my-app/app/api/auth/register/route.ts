import prisma from "@/app/lib/db";
import { signUPObject } from "@/app/lib/zod";
import bcrypt from 'bcryptjs'
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    // console.log((await req).());
    
    const parsedObject = signUPObject.safeParse(await req.json())

    if(!parsedObject.success){
        return NextResponse.json(
            {err : parsedObject.error.errors},
            {status : 500}
        )
    }

    const {username, password, email} = parsedObject.data
    console.log(parsedObject.data);
    

    try {
        const user = await prisma.user.findUnique({
            where : {
                username : username
            }
        }) 

        if(user) {
            return NextResponse.json(
                {msg : 'user already exists try different username or email '}
            )
        }

        const hasedPassword = await bcrypt.hash(password, 10)

        const createdUser = await prisma.user.create({
            data : {
                username,
                password : hasedPassword,
                email
            }, select : {
                id : true
            }
        })

        return NextResponse.json(
            {   msg : 'user created successfully ',
                id : createdUser.id
            },
            {
                status : 201
            }
        )
    } catch (error) {
        return NextResponse.json(
            {msg : `Error while creating user error : ${error}`},
            {status : 500}
        )
    }
    
}