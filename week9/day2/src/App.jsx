import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // use state hooks => define the state
  // conditonal rendering => based on a certain condition render this or that 
  
  const [condition, setCondition] = useState(false)
  // useEffect(() => {
  //   setInterval(() => {
  //     setCondition(t => !t)
  //   }, 5000);
  // }, [])
  
  return (
    <>
      <h1>Hi there</h1>
      {condition ? <Counter/> : null}
    </>
  )
}

// function should be in capital letter 
// we dont want to run evnts everytime the app re render 
// life cycle event => mounting unmounting, re-renderring
// we use useEffect

const Counter = () => {
  const [count, setCount] = useState(0) 
  console.log('counter');
  
  // wnat to render a function not everytime the react re render itself 
  
  //WANT TO GUARD THE SETINTERVAL RUNNING EVERYTIME react re-render the function
  useEffect(() => {
    console.log('on mount ');
    
    let clock  = setInterval(() => {
      setCount(count+1)

    }, 1000);
    console.log('mounted');

    // return function () {
    //   clearInterval(clock)
    // } => clean up of clock happens here 
    
  }, [count])
  // changes happen when something changes inside the [depandency array]
  
  return(
    <div>
      <h1>{count}</h1>
      {/* <button 
      onClick={() => setCount(count+ 1)}
      >increase</button> */}


      {/* <button 
      onClick={() => setCount(count- 1)}
      >decrease </button>
      <button 
      onClick={() => setCount(0)}
      >reset  </button> */}
    </div>
  )
}



export default App
