import { WebSocketServer } from "ws";
import { prismaClient } from "@repo/prisma"
const wss = new WebSocketServer({port : 8080})



wss.on("connection", async(soket) => {
    await prismaClient.user.create({
        data : {
            username : Math.random().toString(),
            password : Math.random().toString()
        }
    })
    // dumping something illogical as we are deploying
    
    soket.send("hii there")

})