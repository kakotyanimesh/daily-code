import React from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { countRecoil, countSelector } from './store/counter'
const App = () => {
  return (
    <div>
      <RecoilRoot>
        <Counter/>
      </RecoilRoot>
    </div>
  )
}


const Counter = () => {
  return <div>
    <Increase/>
    <Decrease/>
    <CountValue/>
    <IsEven/>
  </div>
}


const Increase = () => {
  const setCount = useSetRecoilState(countRecoil)
  return <div>
    <button onClick={() => setCount((c) => c+2)}>increse</button>
  </div>
}


const Decrease = () => {
  const setCount = useSetRecoilState(countRecoil)

  return <div>
    <button onClick={() => setCount((c)=> c-1)}>decrease</button>
  </div>
}

const CountValue = () => {
  const count = useRecoilValue(countRecoil)

  return <div>
    {count}
  </div>
}

const IsEven = () => {
  const isEven = useRecoilValue(countSelector)

  return <div>
    {isEven ? 'even ' : 'odd'}
  </div>
}
export default App




// when we are using recoil it helps us to minimized the rendering thing 








// import { counter } from '@fortawesome/fontawesome-svg-core'
// import React, {useState, useContext, createContext, Children} from 'react'

// const countContext = createContext()


// const App = () => {
//   return (
//     <div>
//       <Counter>
//         <CountComponent/>
//       </Counter>
//     </div>
//   )
// }

// const Counter = ({Children}) => {
//   const [count, setCount] = useState(0)
//  return(
//   <div>
//     <countContext.Provider value={{count, setCount}}>
//   {Children}
//   </countContext.Provider>
//   </div>
//  )

// }

// const CountComponent = () => {
//   const { count, setCount} = useContext(countContext)

//   return <div>
//     <button onClick={() => setCount(count+1)}>Increase</button>
//     <button onClick={() => setCount(count -1)}>Decrease</button>
//     <h1>count is {count}</h1>
//   </div>
// }
// export default App