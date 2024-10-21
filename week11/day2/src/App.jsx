// routing in react 
import React, {useState, useRef, useEffect, createContext, useContext} from 'react'
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom'
import {useFetch ,useContinuousFetch, usePrev } from './customHooks/customFetch.jsx'

const countContext = createContext() // first define the context with createContext() => then make a wrapper function with .Provider & send states and function inside value={{}} 

const ContextWrapper = ({children}) => {
  const [stateCount, setStateCount ] = useState(0)
  
  return <countContext.Provider value={{stateCount, setStateCount}}>
    {children}
  </countContext.Provider>
}
const App = () => {
  const [isBlubOn, setIsBlubOn] = useState(false) // lwts use Context_API

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/port' element={<Portfolio/>}/>
          <Route path='/close' element={<Close/>}/>
          <Route path='/RollUp' element={<RollUpState on={isBlubOn} setOn={setIsBlubOn}/>}/> 
          {/* we can name the key as anything but preferably use the state name from useState  but we have a better way to send state as props => contextApi*/}
          <Route path='/calcc' element={<ContextWrapper><Calcc/></ContextWrapper>}/>  
          {/* wrap the componets where we want to use the same state again and again */}

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const Layout = () => {
  // DEFINE A LAYOUT OF YOUR WEBSITE THEN WRAP UP THE ROUTES INSIDE IT AND DONT FORGET TO USE THE OUTLET WHICH RENDER ALL YOUR COMPONETS 
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
const NavBar = () => {
  return (
    <div style={{display: 'flex', gap:'20px'}}>
      <Link to='/'>home</Link>
      <Link to='/about'>about</Link>
      <Link to='/port'>Portfolio</Link>
      <Link to='/close'>close </Link>
      <Link to='/RollUp'>rollUp </Link>
      <Link to='/calcc'>calcc </Link>
    </div>
  )
}

const Calcc = () => {
  const {stateCount, setStateCount} = useContext(countContext)

  return <>
    <h1>count : {stateCount}</h1>
    <button onClick={() => setStateCount(c =>c + 1)}>click to increase Count</button>
  </>

}
const RollUpState = ({on, setOn}) => {
  return <>
  <h1>{on ? 'on' : 'off' }</h1>
  <button onClick={() => setOn(z => !z)}>click me </button>
  </>
}

const Footer = () => {
  return <h1>footer</h1>
}


const About = () => {
  const { data } = useFetch('https://jsonplaceholder.typicode.com/todos/2')
  return <>
    <h1>fetchd data : {data.title}</h1>
  </>
}
const Portfolio = () => {
  // const {title} = useContinuousFetch(`https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random() * 10 + 10)}`)
  return <>
    {/* <h1>data : {title.title} </h1> */}
    <h1>titkle</h1>
  </>
}
const Close = () => {
  const {data, loading, error} = customFetch('https://jsonplaceholder.typicode.com/todos/8')
  return <>
    {/* {
      loading ? <h1>loading....</h1> : <h1>{data.title}</h1>
    } */}
    {
      error ? <h1>{error}</h1> : loading ? <h1>loading</h1> : <h1>{data.title}</h1> 
    }
  </>
}
// const Home = () => {
//   const ref = useRef()
//   const inputRef = useRef()
//   const [count, setCount] = useState(Number)

//   useEffect(() => {
    
//     ref.current = count
    
//   }, [count])

  
  
//   return <>
//     <h1>Home </h1>
//     <input type="text" ref={inputRef} />
//     <h1>prvious {ref.current}</h1>
//     <button onClick={() => {
//       inputRef.current.focus()
//       setCount(x => x+1)}}>count : {count}</button>
//   </>
// }

const Home = () => {
  const [count, setCount ] = useState(Number)
  const prevValue = usePrev(count)
  
  return <>
    <h1>prev value {prevValue}</h1>
    <button onClick={() => setCount(e => e + 1)}> count : {count}</button>
  </>
} 





export default App




// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <Hello name={'adad'}/>
//       <Hello name={'kakotyt'}/>
//     </div>
//   )
// }


// const Hello = ({name}) => {
//   return (
//     <h1>{name}</h1>
//   )
// }
// export default App


// import React, {useState, useEffect} from 'react'

// const App = () => {
//   const [data, setdata] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchedData = async () => {
//       setLoading(true)
//       const data = await fetch('https://jsonplaceholder.typicode.com/todos')
//       const jsonData = await data.json()
//       setdata(jsonData)
//       setLoading(false)
//     }
    
//     fetchedData()
//     // return () => {
//     //   second
//     // }
//   }, [])
  
//   return (
//     <div>
//       {
//         loading ? <h1>loading</h1> :

//         <ul>
//           {data.map(d => (
//             <li key={d.id}>{d.title}</li>
//           ))}
//         </ul>
//       }
//     </div>
//   )
// }

// export default App













// import React, {useState, useEffect} from 'react'

// const App = () => {
//   const [state, setState ] = useState('')

//   useEffect(()=> {
//     // LOGIc
//     // const clock = setInterval(() => {
//     //   setState(state+1)
//     // }, 100); 

//     // const fetchedData = async() => {
//     //   const data = await fetch('https://jsonplaceholder.typicode.com/todos/')
//     //   const jsondata = await data.json()
//     //   setState(jsondata[0].title)
//     // }

//     // const clock = setInterval(() => {
//     //   fetchedData()
//     // }, 3000);
//     // return () => {
//     //   // cleanUp logic
//     //   clearInterval(clock)
//     // }
//   }, [state])
//   return (
//     <div>title is {state}</div>
//   )
// }

// export default App