/**
 * create wss 
 * user array
 * verufy the token
 * get user id 
 * send to users array to store state in backend 
 * check types if user wants to join room then update the user object of users Array
 * leave stop remove the roomId
 * type check => chat, get msg , room id then 
 * db call
 * server to other users
 */

import WebSocket, { WebSocketServer } from "ws";
import jwt from "jsonwebtoken"
require("dotenv").config()
import { prisma } from "@repo/db"

const wss = new WebSocketServer({port : 8080})

interface User {
    ws : WebSocket,
    rooms : string[],
    userId : string
}

let usersArray : User[] = []

wss.on("connection", (ws, req) => {
    try {
        const url = req.url
    
        if(!url){
            ws.close()
            return
        }
    
        const queryparams = new URLSearchParams(url.split("?")[1])
        const token = queryparams.get("token")
    
        if(!token){
            ws.close()
            return
        }
    
        const userId = verifyToken(token)
    
        if(!userId){
            ws.close()
            return
        }

        
        usersArray.push({
            ws,
            rooms : [],
            userId
        })

        ws.on('message', async(msg) => {
            const parsedObject = JSON.parse(msg.toString())

            if(parsedObject.type === "join"){
                const user = usersArray.find(x => x.ws === ws)

                user?.rooms.push(parsedObject.roomId)
            }

            if(parsedObject.type === "leave"){
                const user = usersArray.find(x => x.ws === ws)

                if(!user){
                    return
                }
                user.rooms = user?.rooms.filter(x => x === parsedObject.roomId )
            }
            

            if(parsedObject.type === "chat"){
                const {roomId, msg } = parsedObject

                try {
                    const chats = await prisma.chats.create({
                        data : {
                            messages : msg, 
                            roomId,
                            userId
                        }
                    })

                    return chats
                } catch (error) {
                    console.log(error + "error in sending messages");
                    
                }


                usersArray.forEach(user => {
                    if(user.rooms.includes(roomId)){
                        user.ws.send(JSON.stringify({
                            type : "chat",
                            roomId : roomId,
                            msg : msg
                        }))
                    }
                })
            }
        })

    } catch (error) {
        console.log(error + " in sendiing etxt adsasd");
        
    }


})


const verifyToken = (token : string) : string | null => {
    try {
        const verifiedJwt = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string)
    
        if(typeof verifiedJwt !== "object" || !verifiedJwt.userId){
            return null
        }
    
        return verifiedJwt.userId
    } catch (error) {
        console.log(`error in verifying jwt : ${error}`);
        return null
        
    }
}