import { Tool } from "../app/components/mainCanvasPage"
import { getShapesFfromServer } from "./http"

type ShapesType = {
    type : "rect",
    x : number,
    y : number,
    width : number,
    height : number
} | {
    type : "circle",
    centerX : number,
    centerY : number,
    radius : number
}


export class Game {
    private canvas : HTMLCanvasElement
    private ctx : CanvasRenderingContext2D
    private existingShape : ShapesType[]
    private roomId : number
    
    private draw : boolean
    private initialX = 0
    private initialY = 0
    private selectedTool : Tool = "circle"

    soket : WebSocket
    constructor(canvas : HTMLCanvasElement, roomId : number, soket : WebSocket){
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")!
        // to avoid null we use !
        this.roomId = roomId
        this.soket = soket
        this.existingShape = []
        this.draw = false
        this.init()
        this.initHandler()
        this.initMouseHandler()
        

    }

    async init(){
        this.existingShape = await getShapesFfromServer(this.roomId)
        // getting all shapes from the backend 
        this.clearCanvas()
    }


    initHandler () {
        this.soket.onmessage = (e) => {
            // console.log(e);
            
            const data = JSON.parse(e.data)
            console.log(data + "data");
            

            if(data.type === "draw"){
                const parsedShapes = JSON.parse(data.message)
                // console.log(parsedMsg + "msg");
                
                parsedShapes.array.forEach(element => {
                    
                });
            }
        }
    }



    destroy () {
        this.canvas.removeEventListener("mousedown", this.mousedownHandler)
        this.canvas.removeEventListener("mouseup", this.mouseupHandler)
        this.canvas.removeEventListener("mousemove", this.mousemoveHandler)

    }


    setTool(tool : "circle" |  "rect" ) {
        this.selectedTool = tool
    }

    clearCanvas(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.existingShape.forEach((shape) => {
            if(shape.type === "rect"){
                this.ctx.strokeRect(shape.x, shape.y, shape.width, shape.height)
            } else if (shape.type === "circle"){
                this.ctx.beginPath()
                this.ctx.arc(shape.centerX, shape.centerY, shape.radius, 0, Math.PI * 2)
                this.ctx.stroke()
            }
        })
    }


    mousedownHandler = (e : MouseEvent) => {
        this.draw = true
        this.initialX = e.clientX
        this.initialY = e.clientY
    }
    
    
    mouseupHandler = (e : MouseEvent) => {
        this.draw = false
        const width = e.clientX - this.initialX
        const height = e.clientY - this.initialY

        const radius = Math.abs(Math.max(width, height) / 2)
        const selectedTool = this.selectedTool

        let shape : ShapesType | null = null

        if(selectedTool === "circle") {
            shape = {
                type : "circle",
                centerX : this.initialX + radius,
                centerY : this.initialY + radius,
                radius : radius
            }
        } else if(selectedTool === "rect"){
            shape = {
                type : 'rect',
                x : this.initialX,
                y : this.initialX,
                width,
                height
            }
        }

        if(!shape){
            return
        }

        this.existingShape.push(shape)

        this.soket.send(JSON.stringify({
            type : "draw",
            roomId : this.roomId,
            message : JSON.stringify(shape)
        }))
    }


    mousemoveHandler = (e : MouseEvent) => {
        if(this.draw){
            const width = e.clientX - this.initialX
            const height = e.clientY - this.initialY

            const radius = Math.abs(Math.max(width, height) / 2 )
            this.clearCanvas()

            const selectedTool = this.selectedTool

            if(selectedTool === "rect"){
                this.ctx.strokeRect(this.initialX, this.initialY, width, height)
            } else if (selectedTool === "circle"){
                this.ctx.beginPath()
                this.ctx.arc(this.initialX + radius, this.initialY + radius, radius, 0, Math.PI * 2)
                this.ctx.stroke()
            }
        }
    }
    initMouseHandler() {
        this.canvas.addEventListener("mousedown", this.mousedownHandler)
        this.canvas.addEventListener("mousemove", this.mousemoveHandler)
        this.canvas.addEventListener("mouseup", this.mouseupHandler)

    }

} 



// mousedownHandler = (e : MouseEvent) => {
//     this.draw = true
//     this.initialX = e.clientX
//     this.initialY = e.clientY
// }

// mouseupHandler = (e : MouseEvent) => {
//     this.draw = false
//     const width = e.clientX - this.initialX
//     const height = e.clientY - this.initialY

//     const selectedTool = this.selectedTool

//     let shape : ShapesType | null = null

//     if(selectedTool === "rect"){
//         shape = {
//             type : "rect",
//             x : e.clientX,
//             y : e.clientY,
//             width,
//             height
//         }
//     } else if (selectedTool === "circle"){
//         shape = {
//             type : "circle",
//             centerX : e.clientX,
//             centerY : e.clientY,
//             radius : Math.abs(Math.max(width, height) / 2)
//         }
//     }

//     if(!shape){
//         return
//     }


//     this.existingShape.push(shape)

//     this.soket.send(JSON.stringify({
//         type : "draw",
//         roomId : this.roomId,
//         message : JSON.stringify(this.existingShape)

//     }))
// }


// mousemoveHandler = (e : MouseEvent)  => {
//     if(this.draw){
//         const width = e.clientX - this.initialX
//         const height = e.clientY - this.initialY
//         const radius = Math.abs(Math.max(width, height) /2)
//         this.clearCanvas()
//         const selectedTool = this.selectedTool

//         if(selectedTool === "rect"){
//             this.ctx.strokeRect(e.clientX, e.clientY, width, height)
//         } else if (selectedTool === "circle"){
//             this.ctx.beginPath()
//             this.ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2 )
//             this.ctx.stroke()
//         }
//     }
// }
