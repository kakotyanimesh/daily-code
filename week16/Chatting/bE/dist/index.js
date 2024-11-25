"use strict";
// import { WebSocketServer, WebSocket } from "ws";
Object.defineProperty(exports, "__esModule", { value: true });
// const wss = new WebSocketServer({port : 8080})
// interface User {
//     soket : WebSocket,
//     roomId : string
// }
// let soketArray : User[] = []
// wss.on('connection', (soket) => {
//     soket.on('message', (msg) => {
//         // @ts-ignore
//         const parsedObject = JSON.parse(msg)
//         if(parsedObject.type === 'join'){
//             soketArray.push({
//                 soket,
//                 roomId : parsedObject.payload.roomId
//             })
//         }
//         if(parsedObject.type === 'chat'){
//             // @ts-ignore
//             const currentUserRoom = soketArray.find(x => x.soket === soket).roomId
//             soketArray.forEach(arr => {
//                 if(arr.roomId === currentUserRoom){
//                     arr.soket.send(parsedObject.payload.message)
//                 }
//             });
//         }
//     })
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let soketArray = [];
wss.on('connection', (soket) => {
    soket.on('message', (msg) => {
        const parsedObject = JSON.parse(msg);
        if (parsedObject.type === 'join') {
            soketArray.push({
                soket,
                room: parsedObject.payload.roomId
            });
        }
        if (parsedObject.type === 'chat') {
            // @ts-ignore
            const currentUserRoom = soketArray.find(x => x.soket === soket).room;
            soketArray.forEach(arr => {
                if (arr.room === currentUserRoom) {
                    arr.soket.send(parsedObject.payload.sms);
                }
            });
        }
    });
});
