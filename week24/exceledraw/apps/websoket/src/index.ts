import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port : 8080})

wss.on("connection", (ws, Request) => {
   const url = Request.url
   
   if(!url){
    return 
   }

   const queryparams = url.split("?")[1]
   
    
})