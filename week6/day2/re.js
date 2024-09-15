const express = require('express')
const app = express()

app.get('/', (res, req) => {
    req.json({
        message : "bbhb"
    })
})

app.listen(2000)