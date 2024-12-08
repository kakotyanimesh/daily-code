import { Request, Response } from "express";
import { todoObjet } from "../utils/zod";
import { error, log } from "console";
import { prisma } from "../utils/PrismClient";

export const createTodo = async(req : Request, res : Response) => {

    const parsedObject = todoObjet.safeParse(req.body)

    if(!parsedObject.success) {
        res.status(403).json({
            msg : 'invalid todo object',
            error : parsedObject.error.errors
        })
        return
    }

    const {title, description, done} = parsedObject.data
    // @ts-ignore
    const userId = req.userId
    
    // console.log(userId.id);
    
    try {
        const todos = await prisma.todo.create({
            data : {
                title, 
                description,
                done, 
                // @ts-ignore
                userId
            },
            select : {
                user : {
                    select : {
                        username : true
                    }
                }
            }
        })

        res.status(200).json({
            msg : 'Todo created successFully',
            todos
        })
    } catch (error) {
        res.status(500).json({
            msg : `Error while creating Todo error : ${error}`
        })
    }
}


export const updateTodo = (req: Request, res :Response) => {
    
}

export const getTodo = (req : Request, res : Response) => {
    
}