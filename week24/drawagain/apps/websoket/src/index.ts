import WebSocket, { WebSocketServer } from "ws";
import jwt from "jsonwebtoken"
import { prisma } from "@repo/db";

require("dotenv").config({path : '../../.env'})

const wss = new WebSocketServer({port : 8080})


interface User {
    ws : WebSocket,
    rooms : string[],
    userId : string
}


let usersArray : User[] =  []

wss.on("connection", (ws, req) => {
    const url = req.url
    if(!url){
        ws.close()
        return
    }

    const userId = getUserId(url)

    if(!userId){
        ws.close()
        return
    }

    usersArray.push({
        ws,
        rooms : [],
        userId : userId
    })

    ws.on("message", async(msg) => {
        try {
            const parsedMsg = JSON.parse(msg as unknown as string)
    
            if(parsedMsg.type === "join"){
                const user = usersArray.find(x => x.ws === ws)
                
                user?.rooms.push(parsedMsg.roomId)
            }
    
            if(parsedMsg.type === "leave"){
                const user = usersArray.find(x => x.ws === ws)
    
                if(!user){
                    return
                }
    
                user.rooms = user.rooms.filter(x => x !== parsedMsg.roomId)
                // remove that room from users arrays room array 
            }


            if(parsedMsg.type === "chat"){
                const {roomId, message } = parsedMsg

                try {
                    await prisma.chats.create({
                        data : {
                            message : message,
                            roomId : roomId,
                            userId
                        }
                    })

                    usersArray.forEach(user => {
                        if(user.rooms.includes(roomId)){
                            user.ws.send(JSON.stringify({
                                type : "chat",
                                message : message
                            }))
                        }
                    }) 
                } catch (error) {
                    throw error
                }
            }
        } catch (error) {
            ws.send(JSON.stringify({
                type : "error",
                message : "Invalid msg sent bro"
            }))
        }
    })
})

const getUserId = (url : string) : string | null => {
    const queryParams = new URLSearchParams(url.split("?")[1])

    const token = queryParams.get("token")

    if(!token){
        return null
    }

    const userId = verifyJwt(token)

    if(!userId){
        return null
    }

    return userId


}



const verifyJwt = (token : string) : string | null => {
    const verifiedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string) 

    if(typeof verifiedToken !== "object" || !verifiedToken){
        return null
    }

    return verifiedToken.userId 
}
