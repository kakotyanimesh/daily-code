"use client"

import { useEffect, useRef, useState } from "react"
import { draw } from "../../utils/draw"
import { ButtonIcons } from "./Icons"
import {Circle, Pencil, RectangleHorizontalIcon} from "lucide-react"

export type Tool = "circle" | "rect"

export default function MainCanvas({roomId} : {roomId : string}) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const [selectedTool, setselectedTool] = useState<Tool>("circle")
  

    console.log(selectedTool);
    
    useEffect(() => {
      //@ts-ignore
      window.selectedTool = selectedTool 
    
      
    }, [selectedTool])
    

    
    
    useEffect(() => {
      const canvas = canvasRef.current
      const ws = new WebSocket(`ws://localhost:8080?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyYjQ3MmVhMy0yM2FjLTQ0OTQtYmNjZS1jMTQ1NjIzMmNjNDkiLCJpYXQiOjE3Mzc3MjM2OTJ9.GFQnQtQvvw2j9-r50bC52Aqexp9-_UaqeMoxopWpZMg
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
    
      return () => {
        ws.onopen = null
      }
    }, [canvasRef])

    
    
    return (
        <div className="overflow-hidden">
            <div className="top-4 px-10 py-2 rounded-md gap-5 flex left-1/2 bg-slate-400 fixed">
              <ButtonIcons Icons={<Circle/>} onclick={() => setselectedTool("circle")}/>
              <ButtonIcons Icons={<RectangleHorizontalIcon/>} onclick={() => setselectedTool("rect")}/>
              {/* <ButtonIcons Icons={<Pencil/>} onclick={() => setselectedTool("pencil")}/> */}
            </div>
            <canvas width={window.innerWidth} height={window.innerHeight} ref={canvasRef}></canvas>
            
        </div>
    )
}


