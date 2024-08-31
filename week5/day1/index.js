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
const app = express();
const port = 3002


// write a middleware 
app.use((req, res, next) => {
    console.log("req received !!");
    next() // calling the next thing 
    /*res.json({
        message : " we are breaking the req, res cyle u are not allowed " 
    })
     above code we send a response before the response from any handler => breaking the req, res 🚲 
    */
    
})

//http://localhost:3002/sum/2/2
app.get('/sum/:a/:b', (req, res) => {
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)

    res.json({
        "summ" : a + b
    })

})


/* 
    there's something known as route specific middlewares also => which basically means those will run in a specific route only, we dont use app.use() => for route specific middlewares => 
                        simply define the function 
*/


function routeSpecificMiddleware (req, res, next) {
    console.log(`the request went through ${req.method} method and url is ${req.url}`);
    next()
    
}


app.get('/routeSpecificMulti/:a/:b', routeSpecificMiddleware, (req, res) => {
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
// here both app.use wala middleware and specific mW will run 
    res.json({
        multiply : a * b
    })
})



app.listen(port, () => console.log(`the port is running at ${port}`));