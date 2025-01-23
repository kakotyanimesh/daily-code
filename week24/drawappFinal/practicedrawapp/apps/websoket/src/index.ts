import WebSocket, { WebSocketServer } from "ws";
import { verifyJwt } from "./utils/verifyjwt";
import { prismaClient } from "@repo/db";
require("dotenv").config({path : "../../.env"})

const wss = new WebSocketServer({port : 8080})

interface User {
    ws : WebSocket,
    rooms : string[],
    userId : string
}


let usersArray : User[] = []

wss.on("connection", (ws, req) => {
    console.log("user joined");
    
    try {
        const url = req.url
        console.log("url" + url);
        
    
        if(!url){
            return
        }
    
        const userId = verifyJwt(url)
        console.log(userId + "userId");
        

        if(!userId) {
            return
        }

        usersArray.push({
            ws : ws,
            rooms : [],
            userId : userId
        })

        console.log(usersArray + "user array");
        
    

        ws.on("message", async(msg) => {
            const parsedMsg = JSON.parse(msg as unknown as string)
            console.log(parsedMsg + "parsed");
            

            if(parsedMsg.type === "join"){
                const user = usersArray.find(x => x.ws === ws)
                console.log(user);
                

                user?.rooms.push(parsedMsg.roomId)
                console.log(parsedMsg.roomId);
                
            }


            if(parsedMsg.type === "leave"){
                const user = usersArray.find(x => x.ws === ws)

                if(!user){
                    return
                }

                user.rooms = user.rooms.filter(x => x !== parsedMsg.roomId)
            }

            

            if(parsedMsg.type === "draw"){
                const { roomId , message } = parsedMsg


                try {
                    await prismaClient.drawings.create({
                        data : {
                            roomId : Number(roomId),
                            creatorId : userId,
                            shapes : JSON.stringify(message)
                            // here also we have to stringify as it parsed pehlen
                        }
                    })

                    usersArray.forEach(user => {
                        if(user.rooms.includes(roomId)){
                            user.ws.send(JSON.stringify({
                                type : "draw",
                                message : JSON.parse(message)
                            }))
                        }
                    })
                } catch (error) {
                    ws.send(JSON.stringify({
                        type : "error",
                        err : error
                    }))
                }
            }
        })
    } catch (error) {
        throw new Error(`something went wrong at server level ${error}`)
    }

})