import { ButtonComponent } from "../components/Button"
import { InputBox } from "../components/InputBox"


const ChatRoom = () => {
  return (
    <div className="pt-20 place-items-center font-Hoover">
        <div className="flex sm:gap-36 gap-20 bg-[#A5CEFF] items-center px-4 sm:py-4 py-2 rounded-xl">
            <h1 className="sm:text-2xl">chat room id : </h1>
            <ButtonComponent title="share" varients="primary" size='md'/>
        </div>
        <div className="bg-[#A5CEFF] mt-10 rounded-xl flex flex-col">
            <div className="h-[50vh] pl-3 pt-5">
                <span className="">
                adadadasd
                </span>
            </div>
            <div className="p-3 sm:gap-12 gap-2 flex">
                <InputBox placeholder="enter your chat" varients="chatBox" />
                <ButtonComponent varients="primary" size="md" title="send" />
            </div>
        </div>
    </div>
  )
}

export default ChatRoom