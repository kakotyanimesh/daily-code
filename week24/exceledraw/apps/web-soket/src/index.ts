import { WebSocketServer } from "ws";


const wss = new WebSocketServer({port : 8080})

wss.on("connection", (ws, Request) => {
    const url = Request.url

    if(!url){
        return
    }

    const queryparams = new URLSearchParams(url.split("?")[1])
    const token = queryparams.get("token") || ""
    ws.on("message", (ms) => {
        ws.send(ms)
        console.log(url);
        
    })
})

