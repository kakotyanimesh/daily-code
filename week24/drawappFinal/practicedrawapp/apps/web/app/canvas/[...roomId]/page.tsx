import MainCanvas from "../../components/mainCanvasPage"

export default async function CanvasPage ({params} : {
    params : {
        roomId : string
    }
}) {
    const roomId = (await params).roomId

    return (
        <div>
            <MainCanvas roomId={roomId}/>
        </div>
    )
}