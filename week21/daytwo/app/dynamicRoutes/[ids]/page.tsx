import axios from "axios"

export default async function Angry({params}:{params : Promise<ParamsInterface>}) {
    const id =(await params).ids

    const ppsts = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return <div>
        {ppsts.data.title}
    </div>
}


interface ParamsInterface {
    ids : string
}