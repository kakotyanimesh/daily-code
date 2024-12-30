"use client"
import { InputCompo } from "@repo/ui/InputCompo"
import { useRouter } from "next/navigation"


export default function Home() {
  const router = useRouter()
  return <div style={{
    display : "flex",
    flexDirection : "column"
    
  }}>
    <InputCompo placeholder="room number"/>
    <button onClick={() => router.push('/chat/123')}>join room </button>
  </div>
}