import { getServerSession } from "next-auth";



export default async function Home() {

  const session = await getServerSession()

  return (
    <div>
      hi there

      <div>
        {session?.user ? "hii" : "hellow"}
      </div>
    </div>
  );
}
