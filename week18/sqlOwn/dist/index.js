"use strict";
// // import { Client } from "pg";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // const pgClient = new Client(')
// // // const main = async () => {
// // //     await pgClient.connect()
// // //     // const response = await pgClient.query('select * from todo')
// // //     // console.log(response.rows);
// // //     // const table = await pgClient.query(`
// // //     //     CREATE TABLE users(
// // //     //         id SERIAL PRIMARY KEY,
// // //     //         username VARCHAR(50) UNIQUE NOT NULL,
// // //     //         email VARCHAR(255) UNIQUE NOT NULL,
// // //     //         password VARCHAR(255) NOT NULL,
// // //     //         createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
// // //     //      )
// // //     //     `)
// // //     // console.log(table);
// // //     try {
// // //         const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`
// // //         const values = ['kakasdasdsadkask', 'adasdasdasdsadsad', 'asdaasdsadsdasd']
// // //         const result = pgClient.query(insertQuery, values)
// // //         console.log(result);
// // //     } catch (error) {
// // //         console.log(error);
// // //     }
// // // }
// // const main = async(email : string): Promise<string> => {
// //     await pgClient.connect()
// //     const query = `SELECT * FROM users WHERE email = $1`
// //     const result = await pgClient.query(query, ['kakoty@gmail.com'])
// //     // if(result.rows[0])
// //     // console.log(result.rows[0]);
// //     if(result.rows.length > 0){
// //         console.log('asada');
// //         return `client exists`
// //     } else {
// //     return `no client`
// //     }
// // }
// // console.log(main('kakoty@gmail.com'));
// // // console.log(main('asdasdasd'));
// import express, { Request, Response } from 'express'
// import { Client } from 'pg'
// const app = express()
// app.use(express.json())
// const client = new Client('')
// client.connect()
// // 
// app.post('/signUp', async(req: Request, res :Response) => {
//     try {
//         const { username , email, password} = req.body
//         const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`
//         // const insertQuery = `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`
//         // console.log(insertQuery, [username, email, password]);
//         await client.query(insertQuery, [username, email, password])
//         res.json({
//             msg : 'user created'
//         })
//     } catch (error) {
//         console.log(error);
//     }
// })
// app.listen(6969)
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const client = new pg_1.Client('');
client.connect();
app.post('/sign', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, email } = req.body;
        const insertQuery = `INSERT INTO users (username, password, email) VALUES ($1, $2, $3)`;
        client.query(insertQuery, [username, password, email]);
        res.json({
            msg: 'user created'
        });
    }
    catch (error) {
        res.json({
            msg: error
        });
    }
}));
app.listen(6969);
