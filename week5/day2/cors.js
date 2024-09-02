const express = require('express')
const cors = require('cors')

const app = express()
const port = 3069

const corsOption = {
    orgin: 'myWebsite.com', // alowing to run backend if i get any req from this frontened url 
    optionSuccessStatus: 200 //  try to memorise the names bro !!
}

app.get('/corsorigin', cors(corsOption), (req, res) => {
    res.send(`corsOption is cool & here cors is a router specific !!`)
} )

app.listen(port, () => console.log(`bhai app http://localhost:${port} t run hoi ase kla `))