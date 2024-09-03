/*
    CORS (cors origin resource sharing)
       => resource sharing b/w two different domains/Origin
    is a HTTP-header based mechanisim that can allows web app having different origins to interact with each other. Basically it helps in exchanging data between frontend & backend.
    { loosen the Same Origin Policy }
*/

/*
    For some HTTP req like PUT/ DELETE or headers like Authorization the browser (before sending req to server) needs to validate if that req is safe or not => Preflight mechanism.
*/


const express = require('express')
const colors = require('./colors.json')
const app = express()

const port = 3000


app.get('/colors', (req, res) => {
    res.json(colors)
})


app.listen(port, () => console.log(`the app is running at port : ${port}`))