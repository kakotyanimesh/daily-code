import { error } from "console";
import { NextFunction,Request, RequestHandler, Response } from "express";
import { ZodSchema } from "zod";


// export const ValidationMiddleware = (schema : ZodSchema) : RequestHandler => {
    
//     return (req: Request, res : Response , next : NextFunction) : void => {
//     const parsedObject = schema.safeParse(req.body)

//     if(!parsedObject.success) res.status(403).json({
//         error : parsedObject.error.errors
//     })
//     return

//     next()
// }
// }


export const ValidationMiddleware = (schema : ZodSchema) : RequestHandler => {
    return (req : Request, res : Response, next : NextFunction) : void => {
        const parsedObject = schema.safeParse(req.body)


        if(!parsedObject.success) {
            res.status(403).json({
                msg : 'invalid Credentials',
                error  : parsedObject.error.errors
            })
            return
        }

        next()
    }
}