import SoketPage from "@/app/newComponents/soketPage"

export default async function CanvasPage ({params} : {
    params : {
        roomId : string
    }
}){

    const roomId = (await params).roomId
    return (
        <SoketPage roomId={roomId}/>
    )
}