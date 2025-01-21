
import WebSocket, { WebSocketServer } from "ws";
import { extractToken, verifyToken } from "./utils/tokenVerify";
import {prismaClient} from "@repo/db"

require("dotenv").config({path : "../../.env"})

interface User {
    ws : WebSocket,
    rooms : string[],
    userId : string
}


let usersArray : User[] = []

const wss = new WebSocketServer({port : 8080})


wss.on("connection", (ws, req) => {
    // console.log("user connected");
    
    const url = req.url
    if(!url){
        return
    }

    const token = extractToken(url)

    if(!token){
        return
    }
    const decoded = verifyToken(token)

    usersArray.push({
        ws ,
        rooms : [],
        userId : decoded
    })

    
    // we got token , user joined now he will send msg to join the room and we are going to 

    ws.on("message", async (msg) => {
        // msg is in object parse it so that we can access its data
        try {
            const parsedMsg = JSON.parse(msg as unknown as string)
            // console.log(parsedMsg + parsedMsg.userId);
            

            if(parsedMsg.type === "join"){
                const user = usersArray.find(x => x.ws === ws)

                user?.rooms.push(parsedMsg.roomId)
                // console.log(user?.rooms);
                
            }


            if(parsedMsg.type === "leave"){
                const user = usersArray.find(x => x.ws === ws)
                if(!user){
                    return
                }

                user.rooms = user.rooms.filter(x => x !== parsedMsg.roomId)
                // console.log(user.rooms);
                

            }


            if(parsedMsg.type === "draw"){
                const {roomId, drawings} = parsedMsg

                try {
                    await prismaClient.drawings.create({
                        data : {
                            roomId,
                            artistsId : decoded,
                            shapes : drawings
                        }
                    })

                    usersArray.forEach(users => {
                        if(users.rooms.includes(roomId)){
                            users.ws.send(JSON.stringify({
                                type : "draw",
                                drawings : drawings
                            }))
                        }
                    })
                } catch (error) {
                    ws.send(JSON.stringify({
                        type : "error",

                    }))
                }
            }
        } catch (error) {
            throw error
        }
    })

    
})




