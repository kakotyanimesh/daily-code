"use strict";
// import { PrismaClient } from "@prisma/client";
// import { log } from "console";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield prisma.user.create({
        data: data
    });
    console.log(res);
});
// createUser({
//     username : "anasdasimasdasdesgh",
//     password : 'asdaasdassdasd',
//     email : 'asdasasdasasdsadasda',
//     lastName : 'asdasdasd',
//     firstName : 'asdasdas'
// })
const updateDate = (username, data) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield prisma.user.update({
        where: { username: username },
        data
    });
    console.log(res);
});
// updateDate('anasdasimasdasdesgh', {
//     email : "new Email",
//     password : 'newPassowrd',
//     username : 'newUsername',
//     lastName : 'newlast'
// })
// updateDate('newUsername',{
//     firstName : 'newFirstnamasdasdadasdasd'
// })
const getData = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield prisma.user.findFirst({
        where: { username }
    });
    console.log(res);
});
const createTodo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // prisma.tableName
    const res = yield prisma.todo.create({
        data
    });
    console.log(res);
});
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
const getTodo = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield prisma.todo.findMany({
        where: { userId: userId }
    });
    console.log(res);
});
getTodo(1);
