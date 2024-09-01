const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors())
// getting data from front end and backend 
// goole how can i get only cors req from my frontend also not from other domains 

app.get("/sum", function(req, res) {
    console.log(req.name);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000);