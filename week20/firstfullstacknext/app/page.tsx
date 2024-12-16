import axios from "axios";

export default async function FetchedData () {
  // await new Promise((x) => setTimeout((x), 2000))
  const response = await axios.get('http://localhost:3000/api/user')
  const todo = await axios.get('http://localhost:3000/api/todos')
  console.log(todo);
  const add = await axios.get('http://localhost:3000/api/homeadd') 
 
  return <div className="flex text-center items-center  min-h-screen justify-center">
    <div className="flex flex-col p-3 rounded-xl border-2 border-black ">
      <h1>username : {response.data.username}</h1>
      <h1>email : {response.data.email}</h1>
      <h1>todo title : {todo.data.title}</h1>
      <h1>todo done : {todo.data.done ? 'true' : 'false' }</h1>
      <h1>home add : {add.data.stateName}</h1>
      <h1>userID : {add.data.useriD}</h1>
    </div>
  </div>
}

// the above code is a server side renderred component where the code js runs in server get data from the db and in returns sends the full ui to client side that is the browser