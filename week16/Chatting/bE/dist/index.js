"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let soketArray = [];
wss.on('connection', (soket) => {
    soket.on('message', (msg) => {
        // @ts-ignore
        const parsedObject = JSON.parse(msg);
        if (parsedObject.type === 'join') {
            soketArray.push({
                soket,
                roomId: parsedObject.payload.roomId
            });
        }
        if (parsedObject.type === 'chat') {
            // @ts-ignore
            const currentUserRoom = soketArray.find(x => x.soket === soket).roomId;
            soketArray.forEach(arr => {
                if (arr.roomId === currentUserRoom) {
                    arr.soket.send(parsedObject.payload.message);
                }
            });
        }
    });
});
