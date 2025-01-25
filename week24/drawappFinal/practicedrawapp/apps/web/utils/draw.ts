import axios from "axios"
import { Tool } from "../app/components/mainCanvasPage"

type shapes = {
    type : "rect",
    x : number,
    y : number, 
    width : number,
    height : number

} | {
    type : "circle",
    x : number,
    y : number,
    rad : number,
    width : number,
    height : number,
    startAngle : number,
    endAngle : number
} 


export const draw = async(canvas : HTMLCanvasElement, ws : WebSocket, roomId : number) => {
    const ctx = canvas.getContext("2d")

    if(!ctx){
        return
    }

    
    // ale
    
    
    
    
    // console.log(await getShapesFfromServer(roomId));
    
    
    

    const shapesArray : shapes[] = await getShapesFfromServer(roomId)

    //@ts-ignore
    const tool = window.selectedTool
    clearCanvas(ctx,canvas, shapesArray);

    

    ws.onmessage = (e) => {
        // console.log(e);
        
        const messageData = JSON.parse(e.data)
        // console.log(messageData.message);
        if(messageData.type === "draw"){
            const data = messageData.message
            console.log(data);
            
            // const shapeObj : shapes = CreateShpesObject({tool, data.})
            
            // shapesArray.push(shapeObj)
            // clearCanvas(ctx, canvas, shapesArray)
        }
    }

    
    let draw = false
    let initialX = 0
    let initialY = 0
    let currentTool : Tool = tool
    

    canvas.addEventListener("mousedown", (e) => {
        draw = true
        initialX = e.clientX
        initialY = e.clientY
        currentTool = tool
    })

    canvas.addEventListener("mouseup", (e) => {
        draw = false
        const width = e.offsetX - initialX
        const height = e.offsetY - initialY

        
        const shapesobject  = CreateShpesObject({tool , initialX, initialY, width, height})
        console.log(shapesobject);
        
        
        shapesArray.push(shapesobject)
        ws.send(JSON.stringify({
            type : "draw",
            roomId : roomId,
            message : JSON.stringify(shapesobject)
        }))


        clearCanvas(ctx, canvas, shapesArray)
    })

    canvas.addEventListener("mousemove", (e) => {
        if(draw){
            const width = e.offsetX - initialX
            const height = e.offsetY - initialY

            clearCanvas(ctx, canvas, shapesArray)
            if(currentTool === "rect") {
                ctx.strokeRect(initialX, initialY, width, height)
            } else if(currentTool === "circle"){
                const rad = Math.max(width, height)/2
                ctx.beginPath()
                ctx.arc(initialX , initialY, Math.abs(rad), 0, Math.PI * 2)
                ctx.stroke()
            }
        }
    })
}



const clearCanvas = (ctx : CanvasRenderingContext2D, canvas : HTMLCanvasElement, shapesArray : shapes[]) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    shapesArray.forEach((shape) => {
        
        if(shape.type === "rect"){
            ctx.strokeRect(shape.x, shape.y, shape.width, shape.height)
        } else if (shape.type === "circle"){
            ctx.beginPath()
            ctx.arc(shape.x, shape.y, shape.rad, shape.startAngle, shape.endAngle)
            ctx.stroke()
        }
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


interface CreateShpapesTypes {
    tool :Tool,
    initialX : number,
    initialY : number,
    width : number,
    height : number,
}

// we have a define cases so rather running if elses we can use switch case 
const CreateShpesObject = ({tool, initialX, initialY, width, height} : CreateShpapesTypes ) : shapes => {
    switch (tool){
        case "circle" : 
            return {
                type : "circle",
                x : initialX,
                y : initialY,
                rad : Math.abs(Math.max(width, height)) /2,
                width : width,
                height : height,
                startAngle : 0,
                endAngle : Math.PI * 2
            }
        case "rect" : 
            return {
                type : "rect",
                x : initialX,
                y : initialY,
                width,
                height
            }
    }
}