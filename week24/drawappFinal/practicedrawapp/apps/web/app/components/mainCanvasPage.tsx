"use client"

import { useEffect, useRef } from "react"
import { draw } from "../../utils/draw"


export default function MainCanvas({roomId} : {roomId : string}) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
      const canvas = canvasRef.current
      const ws = new WebSocket(`ws://localhost:8080?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyYjQ3MmVhMy0yM2FjLTQ0OTQtYmNjZS1jMTQ1NjIzMmNjNDkiLCJpYXQiOjE3Mzc2NjQzNjB9.I1xc6u2lvvYKwh_znE5_AkCaijGgHiDNXojfE6tTAbI
`)
      
      if(!canvas){
        return
      }

      ws.onopen = () => {
        ws.send(JSON.stringify({
          type : "join",
          roomId : Number(roomId)
        }))
      }
      draw(canvas, ws, Number(roomId) )  
    
      
    }, [canvasRef])

    
    
    return (
        <div>
            <canvas width={window.innerWidth} height={window.innerHeight} ref={canvasRef}></canvas>
        </div>
    )
}