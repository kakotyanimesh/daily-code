"use client"

import { useEffect, useRef } from "react"

export default function Canvas () {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
      const refference = canvasRef.current
      
      
      const ctx = refference?.getContext("2d")

      
      let initialX = 0
      let initialY = 0

      refference?.addEventListener("mousedown", (e) => {
        
        initialX = e.clientX
        initialY = e.clientY
        console.log(initialX + "mouse down x ");
        // console.log(initialY);
        
      })

    //   refference?.addEventListener("mousemove", (e) => {
    //     if(!drawing){
    //         const width = e.clientX - initialX
    //         const height = e.clientY - initialY

    //         ctx?.clearRect(0, 0, refference.width, refference.height)
    //         ctx?.beginPath()
    //         ctx?.rect(initialX, initialY, width, height)
    //         ctx?.closePath()
    //     }
    //   })
    

      refference?.addEventListener("mouseup", (e) => {
        console.log(`mouse up width ${e.clientX}` );
        const width = e.clientX - initialX
        const height = e.clientY - initialY

        ctx?.strokeRect(initialX, initialY, width, height)
        
        
       
      })
      
    }, [canvasRef])
    
    
    return (
        <div>

            <canvas ref={canvasRef} className="w-full h-[100vw]" style={{backgroundColor : "red"}}>
            </canvas>
        </div> 
    )
}