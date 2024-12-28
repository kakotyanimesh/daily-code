export default async function Todos({params}:{params : Promise<{
    todoId : string[]
}>}) {
    const arryOfSting = (await params).todoId
    return <div>
        
        {/* {JSON.stringify(arryOfSting[1])} */}
        {JSON.stringify(arryOfSting)}
        asdasdas
        asdasdasasdasd
        
    </div>
}