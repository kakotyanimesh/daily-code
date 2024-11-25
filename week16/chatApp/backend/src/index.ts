// const wss = new WebSocketServer({port : 8080})


// let userCount = 0

// wss.on('connection', (soket) => {
//     // console.log('user connected ');
//     userCount ++
//     console.log(`user connected ${userCount}`);

//     soket.on('message', (e) => {
//         console.log(`message ${e.toLocaleString()}`);
//         setTimeout(() => {
//             soket.send(`message from server ${e.toLocaleString()}`)    
//         }, 1000);
        
//     })
// })

// receive and send msg from client 


// let allSoket: WebSocket[] = []
// wss.on('connection', (soket) => {
//     allSoket.push(soket)

//     soket.on('message', (msg) => {
//         allSoket.forEach(s => {
//            s.send(msg.toLocaleString())
//         });
//     })

//     soket.on('disconnect', () => {
//         allSoket = allSoket.filter(x => x !==soket)
//     })

// })

// interface User {
//     soket : WebSocket,
//     room : string
// }

// let allSoket : User[] = []

// wss.on('connection', (soket) => {
//     soket.on('message', (stringtypeUserObject) => {
//         // the thing inside callback will be object of string => "{insidecallback}"
//         // stringTypeObject => first convert to object json.parse()
//         // string => json.parse => object
//         // object => json.stringify => string

//         const parsedMsg = JSON.parse(stringtypeUserObject as unknown as string)
//         if(parsedMsg.type === "join"){
//             allSoket.push({
//                 soket,
//                 room : parsedMsg.payload.room
//             })
//         }

//         if(parsedMsg.type === 'chat'){
//             const currentUser = allSoket.find(x => x.soket == soket)?.room
//             // find current user room 

//             // allSoket.forEach(e => {
//             //    const rooms = allSoket.filter(x => x.room === currentUser) 
//             //    e.send(parsedMsg.payload.msg)
//             // });

//             for (let i = 0; i < allSoket.length; i++) {
//                 if(allSoket[i].room === currentUser){
//                     allSoket[i].soket.send(parsedMsg.payload.msg)
//                 }
                
//             }

//         }
        


//     })
// })

import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({port : 8080})


interface User {
    soket : WebSocket,
    room : string
}

let soketsArray : User[] = []

wss.on('connection', (soket) => {

    soket.on('message', (msg) => {
        // @ts-ignore
        const parsedObject = JSON.parse(msg)
        if(parsedObject.type === 'join'){
            soketsArray.push({
                soket,
                room : parsedObject.payload.roomId
            })
        }

        if(parsedObject.type === 'chat'){
            // find the current user's room Id
            // @ts-ignore
            const currentUserRoom = soketsArray.find((x) => x.soket === soket).room

            // soketsArray.forEach(arr => {
            //    if(arr.room === currentUserRoom){
            //     arr.soket.send(parsedObject.payload.message)
            //    }
            // });
            
            for (let i = 0; i < soketsArray.length; i++) {
                if(soketsArray[i].room === currentUserRoom){
                    soketsArray[i].soket.send(parsedObject.payload.message)
                }
                
            }


        }
    })

    


})