import express, { Request, Response } from 'express'

const app = express()

// what if i want to add the line with let or const => eslint-disable-next-line
// eslint-disable-next-line
const a = 3321312
// let d =121212
// eslint doesnot complain no code styling like spacing or .. so we can write our own set of rules inside the eslint.config.mjs ( we dont that anymore bring opensource files for that)

app.get('/', (req : Request, res : Response) => {
                    res.json({
                    msg : 'Eslint'
    })
})

app.listen(3000)