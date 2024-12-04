import { ButtonComponent } from "../components/Button"
import { InputBox } from "../components/InputBox"
import { useEffect, useState ,useRef } from "react"

const ChatRoom = () => {
    const msgRef = useRef()
    const [messages, setMessages] = useState(['hii there'])
    const wsRef = useRef()

    useEffect(() => {
        const wss = new WebSocket('wss://localhost:8080');
        
        wss.onmessage = (e) => {
          setMessages((m) => [...m, e.data]);
        };
        // @ts-ignore
        wsRef.current = wss;
      
        wss.onopen = () => {
          wss.send(JSON.stringify({
            type: 'join',
            payload: { room: 'red' },
          }));
        };
      
        return () => {
        //   wss.close(); // Properly close WebSocket on component unmount
        };
      }, []);
      

    const sendMsg = () => {
        // @ts-ignore
        const msg = msgRef.current?.value
        // @ts-ignore
        wsRef.current.send(JSON.stringify({
            "type" : 'chat',
            "payload" : {
                'sms' : msg 
            }
        }))
        
    }
    
  return (
    <div className="pt-20 place-items-center font-Hoover">
        <div className="flex sm:gap-36 gap-20 bg-[#A5CEFF] items-center px-4 sm:py-4 py-2 rounded-xl">
            <h1 className="sm:text-2xl">chat room id : </h1>
            <ButtonComponent title="share" varients="primary" size='md'/>
        </div>
        <div className="bg-[#A5CEFF] mt-10 rounded-xl flex flex-col">
            <div className="h-[50vh] pl-3 pt-5">
                    {messages.map((msg, index) => (
                        <span key={index}>
                            {msg}
                        </span>
                    ))}
            </div>
            <div className="p-3 sm:gap-12 gap-2 flex">
                {/* @ts-ignore */}
                <InputBox placeholder="enter your chat" varients="chatBox" ref={msgRef} />
                <ButtonComponent varients="primary" size="md" title="send" onclick={sendMsg} />
            </div>
        </div>
    </div>
  )
}

export default ChatRoom