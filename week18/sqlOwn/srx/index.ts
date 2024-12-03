// // import { Client } from "pg";

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



import express, { Request, Response } from 'express'
import { Client } from 'pg'

const app = express()
app.use(express.json())

const client = new Client('')

client.connect()


app.post('/sign', async(req: Request, res :Response) => {
    try {
        const {username, password, email} = req.body

        const insertQuery = `INSERT INTO users (username, password, email) VALUES ($1, $2, $3)`

        client.query(insertQuery, [username, password, email])

        res.json({
            msg : 'user created'
        })
    } catch (error) {
        res.json({
            msg : error
        })
    }
})

app.listen(6969)