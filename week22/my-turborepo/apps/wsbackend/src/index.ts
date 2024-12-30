// import { WebSocketServer, WebSocket } from "ws";

// const wss = new WebSocketServer({port : 8080 })

// let user : number = 0

// let allSokets : WebSocket[] = []

// // wss.on is same as making a http connection and it runs a call back function that has a soket object 
// wss.on("connection", (soket) => {
//     // soket is a object same as req or res in http protocol
//     // user = user + 1,
//     // console.log(`user connected no ${user}`);

//     // to send message or we can use the object that is called when there is a web soket connection in our case its wss.on we can use soket.on ("", and theres another call back function)


//     // console.log(soket);
//     user = user+1
//     console.log(`user count : ${user}`);
    

//     allSokets.push(soket)
//     console.log(`total soket connection ${allSokets.length}`);
    
//     soket.on('message', (message) => {
//         allSokets.map((e, index) => (
//             e.send(message.toString())
//         ))
//     })  
// })


import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({port : 8080})



let allSokets : WebSocket[] = []

wss.on("connection", (soket) => {
    allSokets.push(soket)
    soket.on("message", (mes) => {
        allSokets.forEach((s) => {
            s.send(mes.toString())
        })
    })
})