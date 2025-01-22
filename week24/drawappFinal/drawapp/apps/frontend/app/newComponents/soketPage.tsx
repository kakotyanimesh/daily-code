"use client"

import { useEffect, useState } from "react"
import MainCanvas from "./mainCanvas"
import { websoketUrl } from "@/config/backendConfig"

export default function SoketPage({roomId} :  {roomId : string}) {
    const [soketState, SetsoketState] = useState<WebSocket | null>(null)
    useEffect(() => {
      const ws = new WebSocket(`${websoketUrl}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0MGYwZTUwNC1lNWIxLTRmZGQtOWNhYi03ZmNlZTIwZTRkYWIiLCJpYXQiOjE3Mzc1NTY5MTcsImV4cCI6MTczNzU2MDUxN30.WXvv70m_kwxx6xJ46sn0eNpKR2qSjEJa4xycIK-LiE4`)
      
        
      ws.onopen = () => {
        SetsoketState(ws)
        ws.send(JSON.stringify({
            type : "join",
            roomId : roomId
        }))
      }

    }, [])
    

    if(!soketState){
        return <div>
            connecting to server ...
            
        </div>
    }
    return <div>
        <MainCanvas roomId={roomId} soket={soketState} />
    </div>
}