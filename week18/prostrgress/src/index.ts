import { Client } from "pg";

const pgClient = new Client("")


const main = async() => {
    await pgClient.connect()
    const response = await pgClient.query('SELECT * FROM users')

    console.log(response.rows);
    console.log('animesh');
    
    
}


main()