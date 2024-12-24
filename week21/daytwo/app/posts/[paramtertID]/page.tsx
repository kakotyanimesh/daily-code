import axios from "axios"

export default async function Posts({params}: {params : Promise<ParamsInterface>}) {
    const id = (await params).paramtertID

    const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
     return <div>
        {posts.data.title}
     </div>
}

interface ParamsInterface {
    paramtertID : string
}