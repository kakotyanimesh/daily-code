import { WebSocketServer } from "ws";

const wssInstance = new WebSocketServer({port : 8080})


wssInstance.on('connection', (soket) => {
    // setInterval(() => {
    //     soket.send("hiii")
    // }, 500);

    // soket.on('message', (e) => {
    //     soket.send(e.toLocaleString())
    // }) 
    // on is like event handler => the event is message 

    soket.on('message', (e) => {
        if(e.toString() === "animesh"){
            soket.send('welcome boss')
        } else {
            soket.send('you are not authorized bro')
        }
    })
})


// build ping pong first 