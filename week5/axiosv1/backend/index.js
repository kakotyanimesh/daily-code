const express = require('express')
const axios = require('axios')
const fs = require('fs')
const cors = require('cors')
const { title } = require('process')
const { log } = require('console')


const app = express()
const port = 3000

const options = {
    origin: ['http://localhost:5173']
}

app.use(express.json())
app.use(cors(options))

fs.readFile('bookData.json', (err, data) => {
    if(err) res.status(400).send({message : "unable to read data"})
    booksJson = JSON.parse(data) 
})


const generateBookName = () => {
    const adjectives = ["Mysterious", "Adventurous", "Epic", "Haunting", "Enchanted"]
    const noun = ["Journey", "Legacy", "Secret", "Saga", "Quest"]

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)]
    const randomNoun = noun[Math.floor(Math.random() * noun.length)]

    return `${randomAdjective} ${randomNoun}`
}

// console.log(generateBookName());
// console.log(generateBookName());

const generateUserId = () => {
    const userId = Math.floor(Math.random() * 100)
    return userId
}

// console.log(generateUserId());
// console.log(generateUserId());

const generateRandomName = (length) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let result = ''

    for (let i = 0; i < length; i++) {
        result += letters.charAt(Math.floor(Math.random() * letters.length))
        
    }
    return result
}

// console.log(generateRandomName(3));

const capitals = (str) =>{
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

// console.log(capitals("ANADSASDaasasDSAD"));


const generateAuthor = () => {
    const firstName = generateRandomName(6)
    const lastName = generateRandomName(7)

    return `${capitals(firstName)} ${capitals(lastName)}`
    
}

// console.log(generateAuthor());


app.get('/books', (req, res) => {
    res.send(booksJson)
})


app.post('/generateapi', (req, res) => {
    let bookLength = 15
    const newBooks = []

    for (let i = 0; i < bookLength; i++) {
        const bookObj = {
            id: booksJson.length + 1 + i, 
            title: generateBookName(), 
            userId: generateUserId(),
            author: generateAuthor() 
        }
    
        newBooks.push(bookObj)
        
    }

    booksJson.push(...newBooks)
    
    fs.writeFile('bookData.json', JSON.stringify(booksJson), (err) => {
        if(err) throw err

        res.status(200).json(booksJson)
    })
    
})

app.delete('/delete', (req, res) => {
    booksJson = []   
    
    fs.writeFile('bookData.json', JSON.stringify(booksJson), (err)=>{
        if(err) throw err

        res.status(200).json(booksJson)
    })
})

app.listen(port || 3002, () => console.log(`the app is running at http://localhost:${port}`))