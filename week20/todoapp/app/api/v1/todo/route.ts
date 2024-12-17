import { todoObject } from "@/app/utils/zod"
import prisma from "@/app/lib/db"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req : NextRequest) {
    const parsedObject = todoObject.safeParse(await req.json())

    if(!parsedObject.success){
        return NextResponse.json(
            {error : parsedObject.error.errors},
            {status : 403}
        )
    }

    const {title, description, done} = parsedObject.data
    const userId = req.headers.get("userId")
    
    if(!userId){
        return NextResponse.json({
            msg : 'no user id in the token '
        })
    }

    
    try {
        const todo = await prisma.todo.create({
            data : {
                title : title,
                description : description,
                done : done,
                userID : parseInt(userId)
            }
        })

        return NextResponse.json(
            {   msg : 'todo created successfully', 
                todoid : todo.id
            },
            {
                status : 200
            }
        )
        
    } catch (error) {
        return NextResponse.json(
            {msg : `something went wrong while creating todo error : ${error}`},
            {status : 403}
        )
    }
}