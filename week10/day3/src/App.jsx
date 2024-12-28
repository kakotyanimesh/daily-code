// // import React, { useState, useContext, Children } from 'react'

// // const BlubContext = React.createContext()

// // const BlubProvider = ({children}) => {
// //   const [blubOn, setblubOn] = useState(false)

// //   return <BlubContext.Provider value={{
// //     blubOn: blubOn,
// //     setblubOn : setblubOn
// //   }}>
// //     {children}
// //   </BlubContext.Provider>
// // }

// // const App = () => {
// //   // const [blubOn, setblubOn] = useState(false)

// //   return (
// //     <div>

// //       <BlubProvider>
// //         <Blub/>
// //       </BlubProvider>


// //       {/* <BlubContext.Provider value={{
// //         blubOn : blubOn,
// //         setblubOn : setblubOn
// //       }}> 
// //         <Blub/>

// //       </BlubContext.Provider> */}
// //     </div>
// //   )
// // }

// // const Blub =  () => {
// //   return <div>
// //     <BlubOnn/>
// //     <ToggleBlub/>
// //   </div>
// // }


// // const BlubOnn = () => {
// //   const { blubOn} = useContext(BlubContext)
// //   return <div>
// //     {blubOn ? <h1>blub is on</h1> : <h1>blub is off</h1>}
// //   </div>
// // }

// // const ToggleBlub =  () => {
// //   const { blubOn, setblubOn} = useContext(BlubContext)

// //   const offBlub = () => {
// //     setblubOn(c => !c)
// //   }
// //   return <div>
// //     <button onClick={offBlub}>click to on or of</button>
// //   </div>
// // }
// // export default App


// import { useContext } from 'react'

// import { useState } from 'react'
// import { createContext } from 'react'
// const CountContext = createContext()

// const App = () => {

  
//   return (
//     <div>
//       <ContextProvider>
//         <Increase/>
//         <Decrease/>
//         <Value/>
//       </ContextProvider>
//       <h1>animesh </h1>
//     </div>
//   )
// }

// const ContextProvider = ({children}) => {
//   const [count, setCount] = useState(0)
//   return <CountContext.Provider value={{count, setCount}}>
//     {children}
//   </CountContext.Provider>
// }

// const Increase = () => {
//   const {count, setCount} = useContext(CountContext)
//   return <button onClick={() => setCount(count + 1)}>
//     Increase
//   </button>
// }

// const Decrease = () => {
//   const {count, setCount} = useContext(CountContext)
//   return <button onClick={() => setCount(count - 1)}>
//     Decrease
//   </button>
// }

// const Value = () => {
//   const {count} = useContext(CountContext)
//   return <div>
//     {count}
//   </div>
// }






// export default App

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