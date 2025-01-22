    import { backEndUrl } from "@/config/backendConfig"
    import axios from "axios"

    const axiosInstance = axios.create({
        baseURL: backEndUrl,
        timeout: 10000, // 10 seconds
      });

    type Shapes = {
        type : "rect"
        x : number,
        y : number
        width : number
        height : number
    } | {
        type : "circle",
        x : number
        y : number
        rad : number
    }


    export const drawInit = async(canvas : HTMLCanvasElement, roomId : string, soket : WebSocket) => {
        const ctx = canvas.getContext("2d")
        

        
        const existingShapes : Shapes[] = await getExistingShapes(roomId)
        if(!ctx){
            return
        }
        // console.log(existingShapes);
        

        // ClearCanvas(existingShapes, ctx, canvas)

        soket.onmessage = (msg) => {
            console.log('event');
            
            const message = JSON.parse(msg.data)
            console.log(message + "message of event data ig ");
            

            if(message.type === "draw"){
                // probably error here idk
                try {
                    // console.log("drawing" + JSON.parse(message.drawings));
                    
                    existingShapes.push(JSON.parse(message.drawings))
                    ClearCanvas(existingShapes, ctx, canvas)
                } catch (error) {
                    console.log(`error at parsing data ${error}` );
                    
                }
            }
        }

        ClearCanvas(existingShapes, ctx, canvas)
        // ctx.fillStyle = "rgba(0, 0, 0)"
        // ctx.fillRect(0, 0, canvas.width, canvas.height)

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

            const shapes : Shapes = {
                type : "rect",
                x : initialX,
                y : initialY,
                width : width,
                height : height
            }

            if(!shapes){
                return
            }
            existingShapes.push(shapes)

            soket.send(JSON.stringify({
                type : "draw",
                roomId : Number(roomId),
                drawings : JSON.stringify(shapes)
            }))

            console.log("it is happening ");
            

        })

        canvas.addEventListener("mousemove", (e) => {
            if(draw){
                const width = e.clientX - initialX
                const height = e.clientY - initialY

                ClearCanvas(existingShapes, ctx, canvas)
                ctx.strokeRect(initialX, initialY, width, height)


            }
        })
    }


    function ClearCanvas(existingShapes : Shapes[], ctx : CanvasRenderingContext2D, canvas : HTMLCanvasElement) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        existingShapes.map((shape) => {
        if(shape.type === "rect"){
            ctx.strokeRect(shape.x, shape.y, shape.width, shape.height)
        }
        })
    }


    const getExistingShapes = async(roomId : string) => {
        const res = await axiosInstance.get(`${backEndUrl}/room/shapes/${roomId}`)
        const data = res.data.shapes


        const msgData = data.map((x : {shapes : string}) => {
            const shapes = JSON.parse(x.shapes)
            return shapes
        })

        return msgData



    }