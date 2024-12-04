import express, { request, Request, response, Response } from 'express'
import { Client } from 'pg'
import { Await } from 'react-router-dom'

const app = express()
app.use(express.json())

const pgClient = new Client('')
pgClient.connect()

app.post('/createDB', async(req: Request, res: Response) => {
    try {   
        const tableQuery =`CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            password VARCHAR(244) UNIQUE NOT NULL,
            createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )`

        const todoTable = `CREATE TABLE todo(
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            title VARCHAR(1000) NOT NULL,
            time VARCHAR(100) NOT NULL, 
            done BOOLEAN NOT NULL,
            createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        )`


        await pgClient.query('BEGIN')

        await pgClient.query(tableQuery)
        await pgClient.query(todoTable)

        await pgClient.query('COMMIT')

        res.json({
            msg  : 'table created'
        })
    } catch (error) {
        res.json({
            error : error
        })
    }
})


app.post('/putdata', async(req : Request, res :Response) => {
    const {username, password, title, time, done} = req.body

    try {
        const userQuery = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id`
        const todoQuery = `INSERT INTO todo (user_id, title, time, done) VALUES ($1, $2, $3, $4)`

        await pgClient.query('BEGIN')

        const respose = await pgClient.query(userQuery, [username, password])
        const userID = respose.rows[0].id
        await pgClient.query(todoQuery, [userID, title, time, done])

        await pgClient.query('COMMIT')

        res.json({
            msg : 'data added'
        })


    } catch(e) {
        res.json({
            msg : e
        })
    }
})


app.get('/getdata', async(req :Request, res : Response) => {
    const id = req.body.id

    try {
        const innerJoins = 'SELECT u.username, u.id , t.title, t.time, t.done FROM users u INNER JOIN todo t ON u.id=t.user_id WHERE u.id=$1'
        const leftJoin = 'SELECT u.username, u.id, t.title, t.time, t.done FROM users u LEFT JOIN todo t ON u.id=t.user_id WHERE u.id=$1'
        const rightJoin = 'SELECT u.username, t.title, t.time FROM users u RIGHT JOIN todo t ON u.id=t.user_id WHERE u.id=$1'
        const fullJoin = `SELECT u.username, t.title, t.done FROM users u FULL JOIN todo t ON u.id=t.user_id WHERE u.id=$1`
        const response = await pgClient.query(fullJoin, [id])



        res.json({
            res: response.rows
        })
    } catch (error) {
        res.json({
            msg : error
        })
    }
})

app.listen(6969)