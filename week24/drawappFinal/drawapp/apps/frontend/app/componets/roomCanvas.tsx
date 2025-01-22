"use client"

import { websoketUrl } from "@/config/backendConfig"

import { useEffect, useState } from "react"
import MainCanvas from "./mainCanvas"

export default function RoomCanvas  ({roomId} : {roomId : string}) {
   
    const [soket, setSoket] = useState<WebSocket | null>(null)

    useEffect(() => {
      const ws = new WebSocket(`${websoketUrl}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0MGYwZTUwNC1lNWIxLTRmZGQtOWNhYi03ZmNlZTIwZTRkYWIiLCJpYXQiOjE3Mzc1MzgxMTIsImV4cCI6MTczNzU0MTcxMn0.TS0rnd7U4_79Sn8Z2bZoG7soL4yeKiyRlv98E2hzwYc
`)
    
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