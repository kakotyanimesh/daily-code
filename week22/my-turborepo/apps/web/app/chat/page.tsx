"use client"
import { ButtonCompo } from "@repo/ui/buttonElement";
import { Input } from "@repo/ui/input";

export default function Chat(){
  return <div style={{
    display : "flex",
    flexDirection : "column",
    margin : "100px",
    
  }}>
    <div style={{
      height : "30vw",
      backgroundColor : "#1e293b"

    }}>
      
    </div>
    <div style={{
      display : "flex",
      justifyContent : "center",
      marginTop : "10px",
      gap : "100px"
    }}>
      <Input placeholder="type your text"/>
      <ButtonCompo title="send" onclick={() => {
        alert("hii")
      }}/>
    </div>
  </div>
}