interface ParamsInterface {
    name : string[]
}


export default async function Slugs({params}:{params : Promise<ParamsInterface>}) {
    const names = (await params).name
    return <div>
        {JSON.stringify(names)}
    </div>
}