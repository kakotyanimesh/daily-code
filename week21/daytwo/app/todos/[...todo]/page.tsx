export default async function Todos({params} : {params : Promise<{
    todo : string[]
}>}) {
    const todos = (await params).todo
    return <div>
        {todos}
        <h1>andd</h1>
        {JSON.stringify(todos)}
    </div>
}