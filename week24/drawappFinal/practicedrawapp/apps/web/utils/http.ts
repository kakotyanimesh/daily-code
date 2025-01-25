import axios from "axios"

export const getShapesFfromServer = async(roomId : number) => {
    const res = await axios.get(`http://localhost:4000/api/v1/room/getShapes/${roomId}`)
    const data = res.data.shapes
    
    const shapes = data.map((x : {shapes : string}) => {
        // Parse the double-stringified shape
        return JSON.parse(JSON.parse(x.shapes))
    })
    
    return shapes
}
