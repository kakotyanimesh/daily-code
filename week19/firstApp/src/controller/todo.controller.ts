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
                },
                id : true,
                title : true,
                done : true
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

interface UpdateTodoInterface {
    title ?:string
    description ? : string
    done ?: boolean
}

export const updateTodo = async(req: Request, res :Response) => {
    const todoid = parseInt(req.params.id)

    const parsedObject = todoObjet.safeParse(req.body)
    
    if(!parsedObject.success){
        res.status(403).json({
            msg : 'Invalid todo details',
            error : parsedObject.error.errors
        })
        return
    }
    const {title, description, done } : UpdateTodoInterface= parsedObject.data
    // @ts-ignore
    const userId = req.userId

    try {

        const existingTodo = await prisma.todo.findFirst({
            where : {
                id : todoid, 
                // @ts-ignore
                userId : userId
            }
        })

        // console.log(existingTodo);
        
        if(!existingTodo){
            res.status(404).json({
                msg : 'Todo not found or unauthorized to delete'
            })
            return
        }
        // const updaterField : UpdateTodoInterface = {}

        // if(title !== undefined) updaterField.title =title
        // if(description !== undefined) updaterField.description = description
        // if(done !== undefined) updaterField.done = done


        
        const updatedTodo = await prisma.todo.update({
            where : {id : todoid},
            data : {
                title, description, done
            },
            select : {
                user : {
                    select : {
                        username : true
                    }
                },
                title : true,
                description : true,
                done : true
            }

        })

        res.status(200).json({
            msg : 'Todo updatedSuccessfully',
            updatedTodo
        })
    } catch (error) {
        res.status(500).json({
            msg : `Error while updating todo error : ${error}`
        })
    }
}

export const getTodo = async(req : Request, res : Response) => {
    // @ts-ignore
    const userId = req.userId
    console.log(userId);
    

    try {
        const todos = await prisma.todo.findMany({
            // @ts-ignore
            where : {userId}
        })

        
        res.status(200).json({
            msg : 'Todos',
            todos
        })
    } catch (error) {
        res.status(500).json({
            msg : `Error while getting all todos error : ${error}`
        })
    }
}

export const deleteTodo = async(req : Request, res : Response) => {
    const todoId = Number(req.params.id)
    // @ts-ignore
    const userId = req.userId
    // console.log(userId);
    

    try {
        // in findFirst if one field got matched then we got success means if the userid or the todo id any of it got found then the operation will happen => id milgaya tabhi delete hoga or if userId bhi match ho gaya tabbhi delete hoga
        // const existingTodo = await prisma.todo.findFirst({
        //     where : {
        //         id : todoId,
        //         // @ts-ignore
        //         userId : userId
        //     }
        // })

        const existingTodo = await prisma.todo.findUnique({
            where : {id : todoId}
        })


        // console.log(existingTodo);
        // @ts-ignore
        if(!existingTodo || existingTodo.userId !== userId){
            res.status(404).json({
                msg : 'No todo exists or -- unauthorized to delete the todo'
            })
            return
        }
        const deleteSuccess = await prisma.todo.delete({
            where : {id : todoId}
        })

        // console.log(deleteSuccess);

        res.status(200).json({
            deleteSuccess
        })
        
    } catch (error) {
        res.status(500).json({
            msg : `Error while deleting todos error : ${error}`
        })
    }
}