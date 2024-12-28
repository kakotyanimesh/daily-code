import { getServerSession } from "next-auth"

export default async function NewPage() {
    const userData = await getServerSession()
    return <div>
        {JSON.stringify(userData?.user?.email)}
        <h1>its  server componetns as we use getServerSession</h1>
    </div>
}