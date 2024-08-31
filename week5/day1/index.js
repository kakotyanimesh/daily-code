// // axios is same as fetch but have cleaner syntax

// const data = async () => {
//     const fetchedData = await fetch("url")
//     const jsonData = fetchedData.json()
//     console.log(jsonData);
    
// }
// const dataaxios = async () => {
//     const fetchedData = await fetch("url")
//     const jsonData = fetchedData.json()
//     console.log(jsonData);
    
// }



const express = require("express");
const bodyParser = require('body-parser')



const app = express();

app.use(bodyParser.json())
app.get("/sum/:a/:b", function(req, res) {
    const a = parseInt(req.params.a) 
    // params => to get 
    const b = parseInt(req.params.b)

    res.send(
        {ans  : a + b}
    )
});

app.get("/multiply", function(req, res) {
    const a = req.query.a
    const b = req.query.b

    res.send({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a
    const b = req.query.b

    res.send({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = req.query.a
    const b = req.query.b

    res.send({
        ans: a - b
    })
});

app.listen(3000);