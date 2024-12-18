import { todoObject } from "@/app/utils/zod"
import prisma from "@/app/lib/db"
import { NextRequest, NextResponse } from "next/server"
import { error } from "console"

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
                todoId : todo.id
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


export async function GET(req:NextRequest) {
    const userID = req.headers.get('userId')

    if(!userID){
        return NextResponse.json(
            {msg: 'invalid userid'},
            {status : 404}
        )
    }

    try {
        const todos = await prisma.todo.findMany({
            where : {
                userID : parseInt(userID)
            }
        })

        return NextResponse.json(
            {todo : todos},
            {status: 200}
        )
    } catch (error) {
        return NextResponse.json(
            {msg : `something went wrong while getting todo from server error: ${error}`},
            {status : 500}
        )
    }
}


