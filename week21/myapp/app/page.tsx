import { Expire, SignIn } from '../components/Button'
import { getServerSession } from "next-auth";

export default async function Home() {
  const sessions = await getServerSession()
  console.log(sessions);
  
  return (
    <div>
      animesh kakoty 

      {
        sessions?.user?.email? <SignIn/> : <Expire/>
      }
      {/* {
        sessions?.user && <Expire/>
      } */}
    </div>
  );
}
