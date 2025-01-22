"use client"

import { websoketUrl } from "@/config/backendConfig"

import { useEffect, useState } from "react"
import MainCanvas from "./mainCanvas"

export default function RoomCanvas  ({roomId} : {roomId : string}) {
   
    const [soket, setSoket] = useState<WebSocket | null>(null)

    useEffect(() => {
      const ws = new WebSocket(`${websoketUrl}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0MGYwZTUwNC1lNWIxLTRmZGQtOWNhYi03ZmNlZTIwZTRkYWIiLCJpYXQiOjE3Mzc1MzI2NjUsImV4cCI6MTczNzUzNjI2NX0.kZ6pHnMFnotCKNLPMPvAsFHHdNQ_75OpzFGo-dsUmm8`)
    
      ws.onopen = () => {
        setSoket(ws)
        ws.send(JSON.stringify({
            type : "join",
            roomId
        }))
      }
    }, [])
    

    

    if(!soket){
        return <div>
            connecting to the server ..... wait 
        </div>
    }
    
    return (
        <MainCanvas roomId={roomId} soket={soket}/>
    )
}