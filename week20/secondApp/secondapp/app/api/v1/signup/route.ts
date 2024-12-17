import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/db";

export async function POST(req : NextRequest){
    const data = await req.json()

    const user =  await prisma.userTwo.create({
        data : {
            username : data.username,
            password : data.password
        }
    })

    return NextResponse.json({
        msg : 'user created successfully',
        userid : user.id
    })
}