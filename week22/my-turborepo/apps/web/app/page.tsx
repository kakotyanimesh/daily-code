"use client"
import { ButtonCompo } from "@repo/ui/buttonElement";
import { Input } from "@repo/ui/input";
import { useRouter } from "next/navigation";

import { useRef } from "react";

export default function Home(){
  const websoket = new WebSocket("ws://localhost:8080")
  const reff = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const joinRoom = async() => {
    if(reff.current){
      const roomId = reff.current.value

      const room = await websoket.send(
        JSON.stringify({
          type : "join",
          payload : {
            roomId : roomId
          }
        })
      )

      router.push('/chat')

      

      


    }
  }
  return <div style={{
    display : "flex",
    flexDirection : "column",
    margin : "100px",
    alignItems : "center"
    
  }}>
    <div style={{
      // height : "10vw",
      // backgroundColor : "#1e293b",
      textAlign : "center"

    }}>
      <h1>Enter your roomId </h1>
    </div>
    <div style={{
      display : "flex",
      justifyContent : "center",
      marginTop : "30px",
      gap : "100px"
    }}>
      
      <Input placeholder="123" ref={reff}/>
      <ButtonCompo title="send" onclick={joinRoom}/>
    </div>
  </div>
}