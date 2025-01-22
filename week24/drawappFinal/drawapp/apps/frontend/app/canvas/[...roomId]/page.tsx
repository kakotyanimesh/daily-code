// "use client"

import RoomCanvas from "@/app/componets/roomCanvas";

// import { drawInit } from "@/draw"
// import { useEffect, useRef } from "react"

// export default function CanvasPage () {
//     const canvasRef = useRef<HTMLCanvasElement>(null)

//     useEffect(() => {

//         if(canvasRef.current){
//             drawInit(canvasRef.current, "2")
//         }

//     }, [canvasRef])
    
//     return (
//         <canvas width={window.innerWidth} height={1080} ref={canvasRef}></canvas>
//     )
// }


export default async function CanvasRoom({params} : {
    params : {
        roomId : string
    }
}) {
    const roomId = (await params).roomId
    return (
        <RoomCanvas roomId={roomId} /> 
    )
}