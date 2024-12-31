"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let inmemorySoket = [];
wss.on('connection', (soket) => {
    soket.on('message', (msg) => {
        try {
            const parsedMsg = JSON.parse(msg);
            if (parsedMsg.type === "join") {
                inmemorySoket.push({
                    soket,
                    roomId: parsedMsg.payload.roomId
                });
                console.log(`total user : ${inmemorySoket.length}`);
            }
            if (parsedMsg.type === "chat") {
                const sender = inmemorySoket.find((x) => x.soket === soket);
                if (!soket) {
                    console.log('no user with soket found');
                    return;
                }
                const roomId = sender === null || sender === void 0 ? void 0 : sender.roomId;
                const participants = inmemorySoket.filter((x) => x.roomId === roomId);
                participants.forEach((p) => {
                    if (p.soket !== soket) {
                        p.soket.send(parsedMsg.payload.message);
                    }
                });
            }
        }
        catch (error) {
            console.log(`something went wrong while sending msg error : ${error}`);
        }
    });
    soket.on('close', () => {
        inmemorySoket = inmemorySoket.filter((x) => x.soket !== soket);
        console.log(`user disconnected, total user : ${inmemorySoket.length}`);
    });
});
// import { WebSocketServer, WebSocket } from "ws";
// const wss = new WebSocketServer({port : 8080})
// interface User {
//     soket :  WebSocket,
//     roomId : string
// }
// let allSokets : User[] = []
// wss.on("connection", (soket) => {
//     /**
//         * client connect to the web soket server 
//         * it runs a callback function lets say it has soket object in it 
//         * now if he sends any message ( remember the message is in text format)
//         * first parsed the string message to json , then
//         * add it to the all soket array that has object in it which has interface of User 
//         *  check type of message 
//             * if its join type and has room id in it then push to the allsoket array 
//             * if the users next string msg is of type chat that has text in the payload then sent it to the soket which will eventually sent it to the all participants of that socket 
//             * 
//      */
//     soket.on('message', (msg) => {
//         const parsedMsg = JSON.parse(msg as unknown as string)
//         if(parsedMsg.type === "join"){
//             allSokets.push({
//                 soket,
//                 roomId : parsedMsg.payload.roomId
//             })
//         }
//         if(parsedMsg.type === "chat"){
//             const s = allSokets.find(x => x.soket === soket)
//             // find if the user exists or not // sender basically 
//             if(!s){
//                 console.log('no sender found in the room');
//                 return
//             }
//             const roomIdS = s.roomId
//             //  take out room id
//             const soketsOfSameRoom = allSokets.filter((x) => x.roomId === roomIdS)
//             console.log(soketsOfSameRoom);
//             // filter all the soket objests that has same room id of the sender 
//             soketsOfSameRoom.forEach((persons) => {
//                 // foreach will give us 
//                 if(persons.soket !== soket){
//                     persons.soket.send(parsedMsg.payload.message    )
//                 }
//             })
//         }
//     })
// })
// // import { WebSocketServer, WebSocket } from "ws";
// // const wss = new WebSocketServer({port : 8080 })
// // let user : number = 0
// // let allSokets : WebSocket[] = []
// // // wss.on is same as making a http connection and it runs a call back function that has a soket object 
// // wss.on("connection", (soket) => {
// //     // soket is a object same as req or res in http protocol
// //     // user = user + 1,
// //     // console.log(`user connected no ${user}`);
// //     // to send message or we can use the object that is called when there is a web soket connection in our case its wss.on we can use soket.on ("", and theres another call back function)
// //     // console.log(soket);
// //     user = user+1
// //     console.log(`user count : ${user}`);
// //     allSokets.push(soket)
// //     console.log(`total soket connection ${allSokets.length}`);
// //     soket.on('message', (message) => {
// //         allSokets.map((e, index) => (
// //             e.send(message.toString())
// //         ))
// //     })  
// // })
