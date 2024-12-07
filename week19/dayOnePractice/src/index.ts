// import { PrismaClient } from "@prisma/client";
// import { log } from "console";



// const prisma = new PrismaClient()

// interface UserInterface{
//     username : string,
//     email : string,
//     password : string,
//     lastName : string,
//     firstName : string
// }
// const addData = async ({username, password, email, lastName, firstName} : UserInterface) => {
//     const res = await prisma.user.create({
//         data : {
//             username,
//             password,
//             email, 
//             lastName, 
//             firstName
//         }
//     })

//     console.log(res);
    
// }   


// // addData({
// //     username : 'asdasda',
// //     password : 'dsasdadasd',
// //     email : 'adsadadsasd',
// //     lastName : 'asdadsadsas',
// //     firstName : 'asdasdasas'
// // })


// interface UpdatedInterface {
//     firstName : string,
//     lastName : string
// }


// const updateData = async(username : string, {
//     lastName, 
//     firstName
// } : UpdatedInterface) => {
//     const res = await prisma.user.update({
//         where : {username},
//         data : {
//             firstName, 
//             lastName
//         }
//     })
    
//     console.log(res);
    
// }

// // updateData('asdasda',{
// //     lastName : 'newLastName',
// //     firstName : 'new fIRST ANEM'
// // })


// const getUserDetails = async(username : string) => {
//     const res = await prisma.user.findFirst({
//         where : {username}
//     })

//     console.log(res);
// }

// // getUserDetails('asdasda')


import { PrismaClient } from "@prisma/client";
import { log } from "console";

const prisma = new PrismaClient()

interface User {
    username : string,
    password : string,
    email : string,
    lastName : string,
    firstName : string
}

const createUser = async(data : User) => {
    const res = await prisma.user.create({
        data : data
    })

    console.log(res);
    
}


// createUser({
//     username : "anasdasimasdasdesgh",
//     password : 'asdaasdassdasd',
//     email : 'asdasasdasasdsadasda',
//     lastName : 'asdasdasd',
//     firstName : 'asdasdas'
// })


const updateDate = async(username : string, data : Partial<User>) => {
    const res = await prisma.user.update({
        where : {username : username},
        data
    })

    console.log(res);
    
}

// updateDate('anasdasimasdasdesgh', {
//     email : "new Email",
//     password : 'newPassowrd',
//     username : 'newUsername',
//     lastName : 'newlast'

// })


// updateDate('newUsername',{
//     firstName : 'newFirstnamasdasdadasdasd'
// })


const getData = async (username  : string) => {
    const res = await prisma.user.findFirst({
        where : {username}
    })

    console.log(res);
    

}

// getData('newUsername')


// createTodo thingys

interface TodoInterface {
    title : string,
    done ?: boolean,
    description : string,
    time : Date,
    userId : number
}
const createTodo = async (data : TodoInterface) => {
    // prisma.tableName
    const res = await prisma.todo.create({
        data
    })
    console.log(res);
    
}

// createTodo({
//     title : 'Go to gym',
//     description : 'asdasdasd', 
//     time : new Date('2003-02-07T19:00:00'),
//     userId : 1
// })

// const updateTodo = async(userId : number, data : Partial<TodoInterface>) => {
//     const res = await prisma.todo.update({
//         where : {userId : userId},
//         data 
//     })
// }


const getTodo = async(userId : number) => {
    const res = await prisma.todo.findMany({
        where : {userId : userId}
    })

    console.log(res);
    
}

getTodo(1)