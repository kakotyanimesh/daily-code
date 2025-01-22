import { drawInit } from "@/draw"
import { useEffect, useRef } from "react"

export default function MainCanvas({roomId, soket} : {roomId : string, soket : WebSocket}){
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        if(canvasRef.current){
            drawInit(canvasRef.current, roomId , soket)
        }
    }, [canvasRef])
    return (
        <canvas width={window.innerWidth} height={2080} ref={canvasRef}/>
    )
}