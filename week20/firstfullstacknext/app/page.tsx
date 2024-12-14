import axios from "axios";

export default async function FetchedData () {
  // await new Promise((x) => setTimeout((x), 2000))
  const response = await axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details')

  return <div className="flex text-center items-center  min-h-screen justify-center">
    <div className="flex flex-col p-3 rounded-xl border-2 border-black ">
      <h1>username : {response.data.name}</h1>
      <h1>email : {response.data.email}</h1>
    </div>
  </div>
}

// the above code is a server side renderred component where the code js runs in server get data from the db and in returns sends the full ui to client side that is the browser