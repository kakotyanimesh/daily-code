import { WebSocketServer } from "ws";

import jwt, { JwtPayload } from "jsonwebtoken"

const wss = new WebSocketServer({port : 8080})


wss.on('connection', (ws, Request) => {
    const url = Request.url

    if(!url){
        return
    }

    /**
     * take token from url that is inside the query paramater so we have to split it first 
     * verify it 
     */

    const qeueryparams = new URLSearchParams(url.split('?')[1])
    const token = qeueryparams.get("token") || ""

    const decoded = jwt.verify(token,"adadad")

    if(typeof decoded === "string"){
        return 
    }

    if(!decoded || !(decoded).userId){
        ws.close()
        return
    }

    ws.on("message", (msg) => {
        ws.send(msg)
    })



})