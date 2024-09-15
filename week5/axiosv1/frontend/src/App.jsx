import React,  { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [books, setBooks] = useState([])
  const [statusCode, setstatusCode] = useState()
  const [headers, setheaders] = useState()
  const [config, setconfig] = useState()

  axios.defaults.baseURL = 'http://localhost:3000'

  const generateApi = async () => {
    try {
      await axios.post('/generateapi')
      console.log("post");
    } catch (error) {
      console.log(`the error in api is ${error}`);
    }
    
  }

  const getData = async () => {
    try {
      const response = await axios.get('/books')
      if(response.data.length === 0){
        alert("api is empty")
        return
      }
      setBooks(response.data)
      setstatusCode(response.status)
      setheaders(response.headers)
      setconfig(response.config)
    } catch (error) {
      console.log(`error in axios's get : ${error}`);
      
    }
    
    
  }

  const clearApi = async () => {
    await axios.delete('/delete')
    alert('api is cleared')
    setBooks([])
  }
  return (
    <div className='flex flex-col justify-center mt-20 items-center'>
      <div className=''>
        <h1 className='text-black text-lg px-14 font-bold'>AXIOS Under The Hood </h1>
      <div className='flex space-x-5 mt-2 '>
        <button type='button' className='bg-[#008080] p-2 rounded-lg border-gray-600' onClick={generateApi}>Generate API</button>
        <button type='button' className='bg-[#008080] p-2 rounded-lg border-gray-600' onClick={getData}>Get</button>
        <button type='button' className='bg-[#008080] p-2 rounded-lg border-gray-600'>Post</button>
        <button type='button' className='bg-[#008080] p-2 rounded-lg border-gray-600' onClick={clearApi}>API clear</button>
        
      </div>
      </div>

      
      
      <div className='flex justify-center mt-10 sm:mx-20 '>
        {statusCode && (
          <div className='text-center'>
            <div>
            <h1 className='inline-block p-2 rounded-lg m-2 border-2 border-green-600 bg-green-200'>status code is {statusCode}</h1>
            </div>
            <div className='rounded border-solid border-2 border-sky-500 mt-2 inline-block p-2'>
              <h1 className='font-bold text-red-300'>Headers 👇 </h1>
              <pre>{JSON.stringify(headers)}</pre>
            </div>

            <div className='rounded border-solid border-2 border-sky-500 mt-3 '> 
              <h1 className='font-bold text-red-300'>The datas are 📝 : </h1>
            <pre className=' w-full h-auto  text-white p-0 m-0 whitespace-pre-wrap overflow-x-auto '>{JSON.stringify(books)}</pre>
            </div>

            
            
            
            <div className='rounded border-solid border-2 border-sky-500 mt-3'> 
              <h1 className='font-bold text-red-300'>config : </h1>
            <pre className=' w-full h-auto  text-white p-0 m-0 whitespace-pre-wrap overflow-x-auto '>{JSON.stringify(config)}</pre>
            </div>

          
            
          </div>
        )}
      </div>
      
      
    </div>
  )
}

export default App