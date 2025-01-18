"use client"

import { useEffect, useRef } from "react"

export default function Canvas(){
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvasCurrent = canvasRef.current
//   console.log(canvasCurrent);
// if we want to draw 2d objects we have to use the .getContext("2d")

        const ctx = canvasCurrent?.getContext("2d")
      
        if(!ctx){
            return
        }

        // canvasCurrent?.addEventListener("mousemove", (e) => {
        //     ctx.beginPath()
        //     ctx.rect(e.clientX, e.clientY, 100, 200)
        //     ctx.stroke()
        //     ctx.closePath()
        // })

        // canvasCurrent?.addEventListener("mousedown", (e) => {
        //     ctx.beginPath()
        //     ctx.rect(e.clientX, e.clientY, 100, 200)
        //     ctx.stroke()
        //     ctx.closePath()
        // })


        // canvasCurrent?.addEventListener("mouseup", (e) => {
        //     console.log("mouseup ");
            
        //     console.log(e.clientX);
        //     console.log(e.clientY);
            
        // })

        // canvasCurrent?.addEventListener("mousemove", (e) => {
        //     console.log("mouse is moving");
            
        //     console.log(e.clientX);
        //     console.log(e.clientY);
            
        // })
        /**
         * the logic is 
         * define the canvas and make a ref of it as CANVAS is a html element where we draw in website 
         * after taking ref we need it current position as we are going to perform the js on the current position
         * to draw 2d object we have to use the getContext("2c") or have to initialize it -> to draw object 
         * our main js logic is going to happen on mouseup/mousedown/mousemove event listner 
         * two main thing that this mouse event's call back function gives us which are going to be usefull for us
                * clientX =>  X position from left {x-axis}
                * clientY => Y position from top {y-axis}
         * we have to calculate the initial position of both x and y
         * and final position of any shape both x and y then 
         * we can use javascript's built in functions like 
                *   .rect {rectangle}
                *   .arc {circle}
                *   .stroke {current path } etc
        
         * logic   
                *  so we have the ctx which is initiated after using the getContext("2d") on the canvas ref
                    *   drawing is going to begin with .beginPath() {start the path } and going to close with .closePath() {qill close the path } and draw 
                    *   we can use .rect, .arc etc to chose the shape of the object and etc etc
                    *   we can use .fill {fill color inside that shape } or .stroke {to make color on the border }
                    *   let's say for rectangle we need 4 inputs   
                            *  x CORDINATE of upper left corner
                            *  y CORDINATE of upper left corner
                            *  width 
                            *  height 
                        * when we click on one point => mouse down we got both e.clientx and e.clientY => starting (x, y)
                        * then while in mouse up  => again we got e.clientX and e.clientY => ending(x, y)
                        * so from first mousedown => X and Y we got 
                        * now we need width and height to get ending cordinates
                        * so width => last mouse ups e.clientX - first mousedown e.clientX
                        * and height => last mouse ups e.clientY - first mousedown e.clientY  
         * for showing the progress we have to use the mousemove event listner also 
         */
        
        
        let isClicked = false
        let startingX : number = 0;
        let startingY : number = 0

        canvasCurrent?.addEventListener("mousedown", (e) => {
            isClicked= true
            startingX = e.clientX
            startingY = e.clientY
        })

        canvasCurrent?.addEventListener("mousemove", (e) => {
            if(isClicked){
                const width = e.clientX - startingX
                const height = e.clientY - startingY
                ctx.clearRect(0, 0, canvasCurrent.width, canvasCurrent.height)
                ctx.strokeRect(startingX, startingY, width, height)
                // ctx.fillRect(0, 0, canvasCurrent.width, canvasCurrent.height)
            }
        })

        canvasCurrent?.addEventListener("mouseup", (e) => {
            isClicked = false
            const width = e.clientX - startingX
            const height = e.clientY - startingY
            console.log(width);
            console.log(height);
            
            /**
             * mouse down => is clicked true and mousemove starting so rectangle making start 
             * mouse up  => is clicked false no more rectangle 
             * mouseup => will send data to database 
             * a simple problem => every time mouse move started as we define our rectangle logic inside it it automatically 
             *  creates rectangle for every fucking picsel so 
             * we have to clear the canvas so that it only take the latest one and draw it on the canvas 
             * .clearRect
             */
            
        })

        // canvasCurrent?.addEventListener("mouseup", (e) => {
        //     const width  = e.clientX - startingX
        //     const height = e.clientY - startingY

        //     // ctx.beginPath()
        //     ctx.strokeRect(startingX, startingY, width, height)
        //     // ctx.stroke()
        //     // ctx.closePath()
        // })
      
    }, [canvasRef])
    
    return <div>
        <canvas ref={canvasRef} width={1008} height={2028} style={{backgroundColor : "blue"}}></canvas>
    </div>
}