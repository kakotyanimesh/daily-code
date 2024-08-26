const express = require('express')
const bodyParser = require('body-parser')
const fs = require("fs")
const { threadId } = require('worker_threads')
const app = express()
const port = 3000

app.use(bodyParser.json())
// bodyParser is a middleware and to use middlewares => app.use(middlewarename)

fs.readFile('todos.json', (err, data) => {
  if(err) throw err
  jsonData = JSON.parse(data) // converting it into readable data
}) // reading the data from todos.json file
// console.log(data); // didnot understand anything lol 





// let todos = [] // first In-mempry storage 

// endpoint to fetch the todos in the browser => 
app.get('/todos', (req, res) => {
  res.json(jsonData)
  // returing data to client 
})



app.post('/todos', (req, res) => {
  const todo = {
    id: jsonData.length + 1,
    title : req.body.title,
    completed: req.body.completed || false
  }

  jsonData.push(todo)
  // console.log(jsonData);
  fs.writeFileSync('todos.json', JSON.stringify(jsonData), (err) => {
    if(err) throw err
     
  })
  res.status(201).json(jsonData) 
})


// let's add endpoint for todo update => put method 

app.put('/todos/:id', (req, res) => {
  // we want the id from the route => use parseInt and route parameter
  const id = parseInt(req.params.id)
  // we have to find the specific todo with id from route parameter
  const todo = jsonData.find((t) => t.id === id)
  // find method => if parseInted Id === any id of todo array => return true or false 

  if(!todo){
    return res
    .status(400)
    .json({error : "we can't find todo !"})
  }
  // we found that todo let's update it 

  todo.title = req.body.title || todo.title
  todo.completed = req.body.completed || todo.completed
  
  
  // have to update the todos.json file everytime => may be there is a optimize way

  fs.writeFile('todos.json', JSON.stringify(jsonData), (err) => {
    if(err) throw err
    res.json(jsonData)
  })
})



// delete endpOint to remove todos => delete method 

app.delete('/todos/:id', (req, res) => {

  // parseInt the id 
  const id = parseInt(req.params.id)
 
  
  // find index of that todo of parameter id 
  const index = jsonData.findIndex((t) => t.id === id)

  if(index === -1){
    // reason for -1 is we can get index 0 also but not -1 
    res
    .status(404)
    .json({error : 'Todo not found this time '})
  }

  jsonData.splice(index, 1)
  // console.log(jsonData);
  fs.writeFile('todos.json', JSON.stringify(jsonData), (err) => {
    if(err) throw err
    res
    .status(200)
    .json({message : "todo deleted successfully"})
  })
  
  // remove todo with specific index and remove only one 

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})