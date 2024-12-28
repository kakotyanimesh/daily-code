import axios from "axios"

export default async function Posts({params}:{params : Promise<{id : string}>}) {
    const id =  (await params).id

    const res = await axios.get(`https://dummyjson.com/users/${id}`)
    // console.log(res);
    
    return <div>
        name : {res.data.firstName}
        name : {res.data.age}
    </div>
}