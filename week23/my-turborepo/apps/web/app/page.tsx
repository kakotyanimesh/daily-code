import { getServerSession } from "next-auth"
import { authOptions } from "../lib/auth";

export default async function Home() {
  const session = await getServerSession()
  console.log(session);
  
  return <div>
    <h1>{
        session?.user?.username
      }</h1>
  </div>
}