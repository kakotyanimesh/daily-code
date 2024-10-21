import React, {useState, useEffect, useRef} from 'react'

const useFetch= (url) => {
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, seterror] = useState('')

  useEffect(() => {
    const fetched = async () => {
      try {
        setLoading(true)
        const data = await fetch(url)
        const jsonData = await data.json()
        setData(jsonData)
      } catch (error) {
        console.log(error);
        seterror(error.message)
      }finally{
        setLoading(false)
      }
    }
    
    fetched()
  }, [url])
  
  return {data, loading, error}
}


const useContinuousFetch = (url) => {
  const [title, setTitle] = useState('')

  const fetched = async () => {
    try {
      const data = await fetch(url)
      const d = await data.json()
      setTitle(d)
      
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetched()
  const timer = setInterval(() => {
    fetched()
  }, 1000);
    
   return () => {
    clearInterval(timer)
   }
  }, [url])
  
  return {title}
} 

const usePrev = (value) => {
  const ref = useRef() // initiating the useRef hook 

  useEffect(() => {
    ref.current = value
    // storing the prev value after the re-rendering or mounting
  }, [value])

  return ref.current
  // return the value => this hppens first 
}

export {useFetch, useContinuousFetch, usePrev }