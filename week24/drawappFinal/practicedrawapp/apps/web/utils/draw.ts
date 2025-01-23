import axios from "axios"

type shapes = {
    type : "rect",
    x : number,
    y : number, 
    width : number,
    height : number

}




export const draw = async(canvas : HTMLCanvasElement, ws : WebSocket, roomId : number) => {
    const ctx = canvas.getContext("2d")

    if(!ctx){
        return
    }

    
    
    
    // console.log(await getShapesFfromServer(roomId));
    
    
    

    const shapesArray : shapes[] = await getShapesFfromServer(roomId)

    
    clearCanvas(ctx, canvas, shapesArray);

    

    ws.onmessage = (e) => {
        const shapesss = JSON.parse(e.data)
        console.log(shapesss.message);
        if(shapesss.type === "draw"){
            const getShpesObjet : shapes= {
                type : shapesss.message.type,
                x : shapesss.message.x,
                y : shapesss.message.y,
                width : shapesss.message.width,
                height : shapesss.message.height 
            }
            // console.log(getShpesObjet);
            // getting error here as im sending string from the backend but no anymore 
            console.log(getShpesObjet);
            
            shapesArray.push(getShpesObjet)
            clearCanvas(ctx, canvas, shapesArray)
        }
    }

    
    let draw = false
    let initialX = 0
    let initialY = 0

    canvas.addEventListener("mousedown", (e) => {
        draw = true
        initialX = e.clientX
        initialY = e.clientY
    })

    canvas.addEventListener("mouseup", (e) => {
        draw = false
        const width = e.clientX - initialX
        const height = e.clientY - initialY
        
        const shapesobject : shapes = {
            type : "rect",
            x : initialX,
            y : initialY,
            width : width,
            height : height
        }

        shapesArray.push(shapesobject)

        ws.send(JSON.stringify({
            type : "draw",
            roomId : roomId,
            message : JSON.stringify(shapesobject)
        }))



    })

    canvas.addEventListener("mousemove", (e) => {
        if(draw){
            const width = e.clientX - initialX
            const height = e.clientY - initialY

            clearCanvas(ctx, canvas, shapesArray)
            ctx.strokeRect(initialX, initialY, width, height)
        }
    })
}



const clearCanvas = (ctx : CanvasRenderingContext2D, canvas : HTMLCanvasElement, shapesArray : shapes[]) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    shapesArray.map((shape) => {
        ctx.strokeRect(shape.x, shape.y, shape.width, shape.height)
    })
}




const getShapesFfromServer = async(roomId : number) => {
    const res = await axios.get(`http://localhost:4000/api/v1/room/getShapes/${roomId}`)
    const data = res.data.shapes
    
    const shapes = data.map((x : {shapes : string}) => {
        // Parse the double-stringified shape
        return JSON.parse(JSON.parse(x.shapes))
    })
    
    return shapes
}