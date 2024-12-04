"use strict";
// // // // import { Client } from "pg";
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
// // // // const pgClient = new Client(')
// // // // // const main = async () => {
// // // // //     await pgClient.connect()
// // // // //     // const response = await pgClient.query('select * from todo')
// // // // //     // console.log(response.rows);
// // // // //     // const table = await pgClient.query(`
// // // // //     //     CREATE TABLE users(
// // // // //     //         id SERIAL PRIMARY KEY,
// // // // //     //         username VARCHAR(50) UNIQUE NOT NULL,
// // // // //     //         email VARCHAR(255) UNIQUE NOT NULL,
// // // // //     //         password VARCHAR(255) NOT NULL,
// // // // //     //         createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
// // // // //     //      )
// // // // //     //     `)
// // // // //     // console.log(table);
// // // // //     try {
// // // // //         const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`
// // // // //         const values = ['kakasdasdsadkask', 'adasdasdasdsadsad', 'asdaasdsadsdasd']
// // // // //         const result = pgClient.query(insertQuery, values)
// // // // //         console.log(result);
// // // // //     } catch (error) {
// // // // //         console.log(error);
// // // // //     }
// // // // // }
// // // // const main = async(email : string): Promise<string> => {
// // // //     await pgClient.connect()
// // // //     const query = `SELECT * FROM users WHERE email = $1`
// // // //     const result = await pgClient.query(query, ['kakoty@gmail.com'])
// // // //     // if(result.rows[0])
// // // //     // console.log(result.rows[0]);
// // // //     if(result.rows.length > 0){
// // // //         console.log('asada');
// // // //         return `client exists`
// // // //     } else {
// // // //     return `no client`
// // // //     }
// // // // }
// // // // console.log(main('kakoty@gmail.com'));
// // // // // console.log(main('asdasdasd'));
// // // import express, { Request, Response } from 'express'
// // // import { Client } from 'pg'
// // // const app = express()
// // // app.use(express.json())
// // // const client = new Client('')
// // // client.connect()
// // // // 
// // // app.post('/signUp', async(req: Request, res :Response) => {
// // //     try {
// // //         const { username , email, password} = req.body
// // //         const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`
// // //         // const insertQuery = `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`
// // //         // console.log(insertQuery, [username, email, password]);
// // //         await client.query(insertQuery, [username, email, password])
// // //         res.json({
// // //             msg : 'user created'
// // //         })
// // //     } catch (error) {
// // //         console.log(error);
// // //     }
// // // })
// // // app.listen(6969)
// // import express, { Request, Response } from 'express'
// // import { Client } from 'pg'
// // const app = express()
// // app.use(express.json())
// // const client = new Client('')
// // client.connect()
// // app.post('/sign', async(req: Request, res :Response) => {
// //     try {
// //         const {username, password, email} = req.body
// //         const insertQuery = `INSERT INTO users (username, password, email) VALUES ($1, $2, $3)`
// //         client.query(insertQuery, [username, password, email])
// //         res.json({
// //             msg : 'user created'
// //         })
// //     // } catch (error) {
// //         res.json({
// //             msg : error
// //         })
// //     }
// // })
// // app.listen(6969)
// import { Client } from "pg";
// import express, { Request, Response } from 'express'
// const app = express()
// app.use(express.json())
// const client = new Client('')
// client.connect()
// app.post('/signup', async(req: Request, res : Response) => {
//     try {
//         const {username, password, email} = req.body
//         const insertQuery = `INSERT INTO users (username, password, email) VALUES ($1, $2, $3)`
//         await client.query(insertQuery, [username, password, email])
//         res.json({
//             msg : 'user created'
//         })
//     } catch (error) {
//         res.json({
//             msg : error
//         })
//     }
// })
// app.post('/useradd', async(req :Request, res : Response) => {
//     try {
//         const {username, password, state, pincode} = req.body
//         const insertUser = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id'
//         const responseOne = await client.query(insertUser, [username, password])
//         console.log(responseOne);
//         const userID = responseOne.rows[0].id
//         const insertAdd = 'INSERT INTO add (user_id, state, pincode) VALUES ($1, $2, $3)'
//         await client.query(insertAdd, [userID, state, pincode])
//         res.json({
//             msg : 'user / add created '
//         })
//     } catch (error) {
//         res.json({
//             error
//         })
//     }
// })
// app.post('/transaction', async(req: Request, res: Response) => {
//     try {
//         const { username, password, state, pincode} = req.body
//         const insertUser = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id'
//         const insertADD = 'INSERT INTO add (user_id, state, pincode) VALUES ($1, $2, $3)'
//         // when we add BEGIN AND COMMIT before and after SQL query we make a transcation of query that either both fail or both succesed
//         await client.query('BEGIN')
//         const responseOne = await client.query(insertUser, [username, password])
//         const userId = responseOne.rows[0].id
//         // await new Promise(x => setTimeout(x , 100000000))
//         await client.query(insertADD, [userId, state, pincode])
//         await client.query('COMMIT')
//         res.json({
//             msg  : 'user created'
//         })
//     } catch (error) {
//         res.json({
//             error : error
//         })
//     }
// })
// app.get('/users', async(req: Request, res : Response) => {
//     try {
//         const insertQuery = `SELECT * FROM users`
//         const response = await client.query(insertQuery)
//         // console.log(response.rows);
//         const usersList = response.rows
//         res.json({
//             usersList
//         })
//     } catch (error) {
//         res.json({
//             error
//         })
//     }
// })
// // without joins 
// app.get('/metadeta', async(req : Request, res: Response) => {
//     const id = req.query.id
//     try {
//         const userTable = 'SELECT username,password FROM users WHERE id=$1'
//         const responseONe = await client.query(userTable, [id])
//         const addTable = `SELECT * FROM add WHERE user_id=$1`
//         const responseTwo = await client.query(addTable, [id])
//         res.json({
//             msg : responseONe.rows,
//             msgtwo : responseTwo.rows
//         })
//     } catch (error) {
//         res.json({
//             msg : error
//         })
//     }
// })
// // we can use JOINS 
// app.get('/joinmetadata', async(req : Request, res :Response) => {
//     const id = req.query.id
//     // const Query = `SELECT u.username, u.password, a.state ,a.pincode FROM users u JOIN add a ON u.id=a.user_id WHRER u.id=$1`
//     const Query = 'SELECT u.username, u.id , u.password, a.state, a.pincode FROM users u JOIN add a ON u.id=a.user_id WHERE u.id=$1'
//     const response = await client.query(Query, [id])
//     res.json({
//         data : response.rows
//     })
// })
// app.listen(6969)
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client('postgresql://kafka_owner:gXZwu3cba7UJ@ep-winter-leaf-a1troyv6.ap-southeast-1.aws.neon.tech/kafka?sslmode=require');
pgClient.connect();
app.post('/signUp', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, state, pincod } = req.body;
    try {
        const userInsert = `INSERT INTO users (username, password) VALUE ($1, $2) RETURNING id`;
        const insertAdd = `INSERT INTO add (user_id, state, pincode ) VALUE ($1, $2, $3)`;
        yield pgClient.query('BEGIN');
        const response = yield pgClient.query(userInsert, [username, password]);
        const userId = response.rows[0].id;
        yield pgClient.query(insertAdd, [userId, state, pincod]);
        res.json({
            msg: 'user'
        });
    }
    catch (error) {
        res.json({
            msg: error
        });
    }
}));
app.get('/metadata', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.query.id;
        const joinQuery = `SELECT u.username, u.id, a.state, a.pincode, a.user_id FROM users u JOIN add a ON u.id=a.user_id WHERE u.id=$1`;
        const response = yield pgClient.query(joinQuery, [id]);
        res.json({
            msg: response.rows
        });
    }
    catch (error) {
        res.json({
            msg: error
        });
    }
}));
