import { Request, Response } from "express-serve-static-core";
import { createUserDto } from "../dataTrnasferObj/user.dtos";
import { UserResponse } from "../types/response.types";


export const getUsers = (req: Request, res : Response) => {
    res.json({
        users : [
            {
                name : "animesh"
            }, 
            {
                name : "new name"
            }
        ]
    })
}

type ReturnType = number | UserResponse

// we can change the type of request interface by adding custom types to it in in the bellow <> => generics (types will be defined when it initialized) and inside the generics in the third place we can define the type of our request body

// export const createUser = (req: Request<{}, {}, createUserDto>, res : Response<UserResponse>) : void=> {
//     // req.body.email

//     try {

//         const {username, email} = req.body

//         res.status(200).json({
//             id : 232323,
//             username,
//             email
//         })
//     } catch (error) {
//         console.log(error);
        
//     }


// }

export const createUser = (req: Request<{}, {}, createUserDto>, res: Response<UserResponse>): any => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                msg: "Missing required fields",
            });
        }

        res.status(200).json({
            id: 232323,
            username,
            email,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Internal Server Error",
        });
    }
};
