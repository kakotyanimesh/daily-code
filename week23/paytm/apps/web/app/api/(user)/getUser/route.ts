import prisma from "@repo/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest){
    const username = req.nextUrl.searchParams.get('username')

    if(!username){
        return NextResponse.json({
            msg : 'empty input fields bro'
        }, {
            status : 409
        })
    }

    try {
        const users = await prisma.user.findMany({
            where : {
                username : {
                    contains : username,
                    mode : 'insensitive'
                }
            },
            select : {
                username : true,
                id : true
            }
        })


        if(!users){
            return NextResponse.json(
                {msg : "no users exits "},
                {status : 409}
            )
        }

        return NextResponse.json(
            {users},
            {status : 200}
        )

    } catch (error) {
        return NextResponse.json({msg : `errro in getting user`})
    }
}