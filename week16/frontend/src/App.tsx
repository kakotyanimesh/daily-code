// import {} from 'react'

import { useEffect, useState } from "react"

const App = () => {
    const [soket, setSoket] = useState()


    // const sendMsg = () => {
    //     if(!soket) return 

    //     // soket.send("animesh")
    // }
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080')
        // @ts-ignore
        setSoket(ws)   
        
        ws.onmessage = (e) => {
            alert(e.data)
        }

    }, [])
  return (
    <div> 
        <input type="text" /> <br />
        {/* <button onClick={sendMsg}>send</button> */}
    </div>
  )
}

export default App