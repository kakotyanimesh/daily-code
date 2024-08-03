const express = require('express')
const app = express()
const port = 3000

app.use(express.json());


const USERS = [];

const QUESTIONS = [{
    title: "Two states",
    description: "Given an array , return the maximum of the array?",
    testCases: [{
        input: "[1,2,3,4,5]",
        output: "5"
    }]
},
{
    title: "Two states",
    description: "Given an array , return the maximum of the array?",
    testCases: [{
        input: "[1,2,3,4,5]",
        output: "5"
    }] 
}];


const SUBMISSION = [

]

const harcodedToken = "221dbsahsddfbwbcsdcs"

app.get('/signup', (req, res) => {
    res.send('<h3>go to post man and send me </h3>')
})


app.post('/signup', function(req, res) {
  const {email, password} = req.body
  // taking user's email and password from the body

  if(!email || !password) {
    return res.status(400).send(`provide email and password`)
  }

  // checking for already existed user
  const existedUser = USERS.find(users => users.email === email)
  
  if(existedUser) {
    return res.status(409).send(`user already existed`)
  }

  // if user isnot existed than add those details to the USERS array
  
  USERS.push({email, password})
  
  res.status(200).send('User registered successfully.');
})


app.post('/login', function(req, res) {
  // Add logic to decode body
  // body should have email and password
  const {email, password}= req.body

  if(!email || !password){
    return res.status(404).send(`provide mail and password`)
  }


  // Check if the user with the given email exists in the USERS array
   // Also ensure that the password is the same
  const existeduser = USERS.find(users => users.email === email && users.password === password)


    // If the password is the same, return back 200 status code to the client
  // Also send back a token (any random string will do for now)
  // If the password is not the same, return back 401 status code to the client

  
  if(!existeduser){
    return res.status(401).send("user not found ! go to log in ")
  } else {
    return res.status(200).json({
        message: 'user loggedin succsfully', 
        token: harcodedToken
    })
  }
 
})

app.get('/questions', function(req, res) {

  //return the user all the questions in the QUESTIONS array
  res.status(200).json(QUESTIONS)
})

app.get("/submissions", function(req, res) {
   // return the users submissions for this problem
  res.status(200).json(SUBMISSION)
});


app.post("/submissions", function(req, res) {
   // let the user submit a problem, 
   const {submissionOne } = req.body

   if(!submissionOne){
    return res.status(400).send("provide a submission")
   }

   //randomly accept or reject the solution
   const accept = Math.random() > 0.5


   SUBMISSION.push({submission: submissionOne, accept })
   // Store the submission in the SUBMISSION array above
  res.status(200).send(`your code is submitted ${accept ? `accepted`: `rejected`}`)
});

// leaving as hard todos
// Create a route that lets an admin add a new problem
// ensure that only admins can do that.

app.post('/admin', (req, res) => {
    const email = "abuned@gmai", password = "2112ddd"

    const {emailNew, passwordNew, newProblem} = req.body

    if(email === emailNew && password === passwordNew){
        QUESTIONS.push({newProblem})
        res.status(200).send("question added successfully ")
    } else {
        return res.status(404).send('you are not an admin')
    }
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})