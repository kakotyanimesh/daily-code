import { WebSocket, WebSocketServer } from "ws";
require("dotenv").config()
import jwt, { JwtPayload } from "jsonwebtoken"
import { prisma } from "@repo/db"

const wss = new WebSocketServer({port : 8080})

// in websoket server we need to maintain a state in the backend , here taking an ugly approach of global variable of a certain type 

interface User {
    ws : WebSocket,
    rooms : string[] // user can join multiple rooms 
    userId : string
}

let usersArray : User[] = []

wss.on("connection", (ws , req) => {
    const url = req.url
    if(url){
        return
    }

    const queryParams = new URLSearchParams(url?.split("?")[1]) // url => wss:localhost:6060/?token="asasdasd" as i need the first index element
    console.log(queryParams);
    
    const token = queryParams.get("token") || ""

    const verifiedToken = verifyjwt(token)

    if(!verifiedToken){
        ws.close()
        return null
    }

    // AFTER VERIFICATION one user will be added to Users Array

    usersArray.push({
        ws,
        rooms : [],
        userId : verifiedToken
    })

    // now when user sends messages to join room we update the rooms array then send messages to those rooms which he joins for a moment now


    ws.on("message", async(msg) => {
        const parsedMsg = JSON.parse(msg as unknown as string)

        if(parsedMsg.type === "join"){
            // find the websoket of my user from the global array then push roomid to that single user object of User array 
            const user = usersArray.find(x => x.ws === ws) // find makes each object itteratable then checks which object's ws is matched to ws of mine

            user?.rooms.push(parsedMsg.roomId)
        }

        if(parsedMsg.type === "leave"){
            // date => type = "leave" and roomId = 12
            const user = usersArray.find(x => x.ws === ws)
            // find the user if it exits in the usersArray

            if(!user){
                return "no user"
            }

            // update the users room array means remove the roomID FROM the user

            user.rooms = user.rooms.filter(x => x === parsedMsg.roomId)
        }

        if(parsedMsg.type === "chat"){
            const roomId = parsedMsg.roomId 
            const message = parsedMsg.msg 

            console.log(message +  "msg");
            console.log(roomId + "roomID");
            
            

            await prisma.chats.create({
                data : {
                    roomId : roomId,
                    messages : message,
                    userId : verifiedToken
                }
            })

            usersArray.forEach(user => {
                if(user.rooms.includes(roomId)){
                    user.ws.send(JSON.stringify({
                        type : "chat",
                        message,
                        roomId
                    }))
                }
            })
        }

    })
})


const verifyjwt = (token : string) : string | null => {
    try {
        const verify = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string) as JwtPayload

        if(typeof verify === "string"){
            return null
        }

        if(!verify || !verify.userId ){
            return null
        }

        return verify.userId

    } catch (error) {
        console.log(error);
        
        return null
    }
}