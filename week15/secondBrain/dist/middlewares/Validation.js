"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationMiddleware = void 0;
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
const ValidationMiddleware = (schema) => {
    return (req, res, next) => {
        const parsedObject = schema.safeParse(req.body);
        if (!parsedObject.success) {
            res.status(403).json({
                msg: 'invalid Credentials',
                error: parsedObject.error.errors
            });
            return;
        }
        // req.validatedObject = parsedObject.data
        next();
    };
};
exports.ValidationMiddleware = ValidationMiddleware;
