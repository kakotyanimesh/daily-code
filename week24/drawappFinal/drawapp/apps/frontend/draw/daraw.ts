type shapesType = {
    type : "rect",
    x : number,
    y : number,
    width : number,
    height : number
} |  {
    type : "circle",
    x : number,
    y : number,
    sAngle  : number,
    eAngle : number,
}


export const drawfunction = (currentCanvas : HTMLCanvasElement, roomId : string, soket : WebSocket) => {
    const ctx = currentCanvas.getContext("2d")

    if(!ctx){
        return
    }

    const existingShapes : shapesType[] = [] 
    ClearCanvas(existingShapes, currentCanvas, ctx)

    console.log(roomId);
    

    let initialX : number = 0
    let initialY : number = 0
    let drawing = false
    currentCanvas.addEventListener("mousedown", (e) => {
        drawing = true
        initialX = e.clientX
        initialY = e.clientY

        
    })

    currentCanvas.addEventListener("mouseup", (e) => {
        drawing = false
        const width = e.clientX - initialX
        const height = e.clientY - initialY
        
        const shapesData : shapesType= {
            type : "rect",
            x : initialX,
            y : initialY,
            width,
            height 
        }

        existingShapes.push(shapesData)

        soket.send(JSON.stringify({
            type : "draw",
            roomId : Number(roomId),
            drawings : JSON.stringify(shapesData)
        }))

    })

    currentCanvas.addEventListener("mousemove", (e) => {
        if(drawing){
            const width = e.clientX - initialX
            const height = e.clientY - initialY

            ClearCanvas(existingShapes, currentCanvas, ctx)
            ctx?.strokeRect(initialX, initialY, width, height)

        }
    })




}


const ClearCanvas = (existingShapes : shapesType[], currentCanvas : HTMLCanvasElement, ctx : CanvasRenderingContext2D ) => {
    ctx.clearRect(0, 0, currentCanvas.width, currentCanvas.height)

    existingShapes.map((shape) => {
        if(shape.type === "rect"){
            ctx.strokeRect(shape.x, shape.y, shape.width, shape.height)
        }
    })
}