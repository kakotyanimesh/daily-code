import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({port : 8080})

interface User {
    soket : WebSocket,
    roomId : string
}

let inmemorySokets : User[] = []

wss.on('connection', (soket) => {
    soket.on('message', (msg) => {
        try {
            const parsedMsg = JSON.parse(msg as unknown as string)

            if(parsedMsg.type === "join"){
                inmemorySokets.push({
                    soket,
                    roomId : parsedMsg.payload.roomId
                })
                return
            }

            if(parsedMsg.type === "chat") {
                const sender = inmemorySokets.find((x) => x.soket === soket)
                if(!sender) {
                    console.log('no sender found');
                    return
                }

                const roomId = sender.roomId

                const participants = inmemorySokets.filter((x) => x.roomId === roomId)
                participants.forEach((x) => {
                    if(x.soket !== soket){
                        x.soket.send(parsedMsg.payload.message)
                    }
                })
            }
        } catch (error) {
            console.log(`error : ${error}`);
            
        }
    })

    soket.on('close', () => {
        inmemorySokets = inmemorySokets.filter((x) => x.soket !== soket)
        console.log(`user disconnected total user : ${inmemorySokets.length}`);
        
    })
})