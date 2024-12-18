// write our router logics that want id from the parameter 

import { todoObject } from "@/app/utils/zod";
import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { todo } from "node:test";
import { Prisma } from "@prisma/client";

export async function PUT(req:NextRequest) {
    const todoId = req.nextUrl.pathname.split('/').pop()
    // console.log(todoId);
    

    if(!todoId){
        return NextResponse.json(
            {msg : 'no todo id in the parameter'},
            {status : 403}
        )
    }

    const userId = req.headers.get('userId')

    if(!userId){
        return NextResponse.json(
            {msg : 'no user Id exists'},
            {status : 404}
        )
    }
    // console.log(userId);
    

    // const parsedObject = todoObject.safeParse(await req.json())

    // if(!parsedObject.success){
    //     return NextResponse.json(
    //         {error : parsedObject.error.errors},
    //         {status : 404}
    //     )
    // }

    const {title, description, done} = await req.json()

    try {
        const findTodo = await prisma.todo.findUnique({
            where : {
                userID : parseInt(userId),
                id : parseInt(todoId)
            }
        })

        if(!findTodo){
            return NextResponse.json(
                {msg : 'no todo found in the database'},
                {status : 404}
            )
        }

        const todo = await prisma.todo.update({
            where :{
                userID : parseInt(userId),
                id : parseInt(todoId)
            }, 
            data : {
                title : title || findTodo.title,
                description : description || findTodo.description,
                done : done || findTodo.done
            }
        })


        return NextResponse.json(
            {
                msg : 'todo updated',
                todo : todo
            },
            {
                status : 200
            }
        )
    } catch (error) {
        if(error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025'){
            return NextResponse.json(
                {msg : 'No todo with todoId'},
                {status : 404}
            )
        }
        return NextResponse.json(
            {
                msg : `Error while updating todo, error : ${error}`
            },
            {status : 500}
        )
    }
}


export async function DELETE(req:NextRequest) {
    const userID = req.headers.get('userId')

    const todoId = req.nextUrl.pathname.split('/').pop()

    if(!todoId) {
        return NextResponse.json(
            {msg : 'no todoid '},
            {status : 404}
        )
    }
    if(!userID) {
        return NextResponse.json(
            {msg : 'no userid '},
            {status : 404}
        )
    }

    try {
        const deletedTodo = await prisma.todo.delete({
            where : {
                userID : parseInt(userID),
                id : parseInt(todoId)
            }
        })

        return NextResponse.json(
            {   msg : 'todo deleted successfully', 
                todo : deletedTodo
            },
            {
                status : 200
            }
        )
    } catch (error) {

        if(error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025'){
            return NextResponse.json(
                {msg : 'no todo found with specific todoid'},
                {status : 404}
            )
        }
        return NextResponse.json(
            {
                msg : `Error while deleting todo error  : ${error}`
            },
            {
                status : 500
            }
        )
    }
}