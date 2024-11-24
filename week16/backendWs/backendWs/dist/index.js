"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
// event handler => wss.on
// soket => similar to req-res, only one thing soket 
wss.on('connection', (soket) => {
    // console.log('user connected');
    // setInterval(() => {
    //     soket.send("hiii")
    // }, 500);
    // soket.send("hii there") // server will reponse with hi there 
    // soket.on is when we are getting msg or anything from client 
    soket.on("message", (e) => {
        if (e.toString() === "ping") {
            soket.send("pong");
        }
    });
});
// import { WebSocketServer } from "ws";
// const wss = new WebSocketServer({port : 8080})
// wss.on("connection", (soket) => {
//     console.log("asdasd");
//     soket.send("hiii")
// })
