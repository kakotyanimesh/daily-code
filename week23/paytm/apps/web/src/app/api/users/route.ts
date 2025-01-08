import prisma from "@repo/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest) {
    const username = await req.nextUrl.searchParams.get("username")

    if(!username){
        return NextResponse.json(
            {msg : "nothing in the query parameter"},
            {status : 400}
        )
    }

    try {
        const existedUser = await prisma.user.findMany({
            where : {
                username : {
                    contains : username, 
                    mode : "insensitive" // both uppercase and lowercase 
                }
            }, select : {
                username : true
            }
        })

        // as find many returns array so we have to check for .lenght
        if(existedUser.length === 0){
            return NextResponse.json({msg : "no user found "}, {status : 404})
        }

        return NextResponse.json({user : existedUser}, {status : 200})

    } catch (error) {
        return NextResponse.json({msg : `Error in user search ${error}`}, {status : 500})
    }
}