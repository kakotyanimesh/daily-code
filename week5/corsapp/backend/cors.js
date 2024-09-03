const express = require('express')
const colors = require('./colors.json')
const cors = require('cors')

const app = express()
const port = 3069

const options = {
    origin : [ 'http://localhost:5173' , 'http://localhost:3000'] // we can define as many oring we can to allow them to connect to our backend 
}
app.use(cors(options))

app.get('/colors', (req, res) => {
    // res.set('Access-Control-Allow-Origin', '*')  => allowing for all origin like public api 
    // res.set('Access-Control-Allow-Origin', 'http://localhost:5173') this is to speccify a certain origin 
    // but we have a better solution the cors 
    res.send(colors)

})


app.listen(port, () => console.log(`the app is running at http://localhost:${port}/colors`))
