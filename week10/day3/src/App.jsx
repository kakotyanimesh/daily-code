import React, { useState, useContext, Children } from 'react'

const BlubContext = React.createContext()

const BlubProvider = ({children}) => {
  const [blubOn, setblubOn] = useState(false)

  return <BlubContext.Provider value={{
    blubOn: blubOn,
    setblubOn : setblubOn
  }}>
    {children}
  </BlubContext.Provider>
}

const App = () => {
  // const [blubOn, setblubOn] = useState(false)

  return (
    <div>

      <BlubProvider>
        <Blub/>
      </BlubProvider>


      {/* <BlubContext.Provider value={{
        blubOn : blubOn,
        setblubOn : setblubOn
      }}> 
        <Blub/>

      </BlubContext.Provider> */}
    </div>
  )
}

const Blub =  () => {
  return <div>
    <BlubOnn/>
    <ToggleBlub/>
  </div>
}


const BlubOnn = () => {
  const { blubOn} = useContext(BlubContext)
  return <div>
    {blubOn ? <h1>blub is on</h1> : <h1>blub is off</h1>}
  </div>
}

const ToggleBlub =  () => {
  const { blubOn, setblubOn} = useContext(BlubContext)

  const offBlub = () => {
    setblubOn(c => !c)
  }
  return <div>
    <button onClick={offBlub}>click to on or of</button>
  </div>
}
export default App