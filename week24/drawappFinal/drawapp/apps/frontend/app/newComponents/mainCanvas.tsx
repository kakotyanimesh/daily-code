"use client"
import { drawfunction } from "@/draw/daraw"
import { useEffect, useRef } from "react"

export default function MainCanvas({roomId , soket}: {roomId : string, soket : WebSocket}){
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const currentCanvas = canvasRef.current
      if(currentCanvas){
        drawfunction(currentCanvas, roomId, soket)
      }
        
    //   return () => {
        
    //   }
    }, [canvasRef])
    
    return (
        <canvas width={window.innerWidth} height={1089} ref={canvasRef}></canvas>
    )
}