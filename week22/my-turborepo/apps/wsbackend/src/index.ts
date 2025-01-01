import { WebSocketServer, WebSocket } from "ws";

interface User {
    soket :  WebSocket,
    roomId : string
}

let inmemmorySokets : User[] = []

const wss = new WebSocketServer({port : 8080})

wss.on('connection', (soket) => {
    soket.on('message', (stringMsg) => {
        const parsedMsg = JSON.parse(stringMsg as unknown as string)

        if(parsedMsg.type === 'join'){
            inmemmorySokets.push({
                soket,
                roomId : parsedMsg.payload.roomId
            })
            return
        }

        if(parsedMsg.type === "chat"){
            const sender = inmemmorySokets.find((x) => x.soket === soket)
            if(!sender){
                console.log('no sender found');
                return
                
            }

            const roomId = sender.roomId
            const participants = inmemmorySokets.filter((x) => x.roomId === roomId)
            participants.forEach((x) => {
                if(x.soket !== soket){
                    x.soket.send(parsedMsg.payload.message)
                }
            } )
        }
    })
})