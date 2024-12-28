import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const CountContext = createContext()

const App = () => {
  return (
    <div>
        <h1>hi theeerrr</h1>
        <ContextProviderName>
            <Increase/>
            <Value/>
        </ContextProviderName>
    </div>
  )
}


const ContextProviderName = ({children}) => {
    const [count, setCount] = useState(0)
    return <CountContext.Provider value={{count, setCount}}>
        {children}
    </CountContext.Provider>
}


const Increase = () => {
    const {count, setCount} = useContext(CountContext)
    return <button onClick={() => setCount(count + 1000)}>
        increase by 100
    </button>
}

const Value = () => {
    const {count} = useContext(CountContext)
    return <h1>
        {count}
    </h1>
}



export default App