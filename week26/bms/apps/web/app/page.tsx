import { prismaClient } from "@repo/prisma"

export default async function Home(){
  const user = await prismaClient.user.findFirst()
  return (
    <div>
      {
        user?.password
      }
      {
        user?.username
      }
    </div>
  )
}