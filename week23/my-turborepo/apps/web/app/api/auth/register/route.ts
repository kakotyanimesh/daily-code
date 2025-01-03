import { NextRequest, NextResponse } from "next/server";
import  prisma  from "@repo/db"

export async function POST(req:NextRequest) {
    const {username, password} = await req.json()
    if(!username && !password){
        return NextResponse.json({
            msg : 'no username and password'
        })
    }
    try {
        const user = await prisma.user.create({
            data : {
                username,
                password
            }, select : {
                username : true,
                id : true
            }
        })

        return NextResponse.json({
            username : user.username,
            id : user.id
        })
    } catch (error) {
        // @ts-expect-error
        if(error instanceof Error && error.code === 'P2002') {
            return NextResponse.json({
                msg : 'same user exits log in '
            })
        }
        return NextResponse.json({
            err : error
        })
    }
}