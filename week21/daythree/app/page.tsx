
'use client'
// import { getServerSession } from "next-auth"
import { signIn, signOut, useSession } from "next-auth/react"
// import { signIn, signOut } from "next-auth/react"

// import { signIn, signOut, useSession } from "next-auth/react";



// export default function Home() {
//   const sessions = useSession()
//   return (
//     <div className="flex flex-col justify-center items-center h-screen text-center space-y-11">
//       <h1>we are going to do routes in next js , basically the folders that we can make with () and [....name] and [[...name]] </h1>
//       <button className="bg-blue-500 p-2 rounded-md" onClick={() => signIn()}>signin</button>
//       <button className="bg-blue-500 p-2 rounded-md" onClick={() => signOut()}>signout</button>

//       <h1>
//         {JSON.stringify(sessions  )}
//       </h1>
//     </div>
//   );
// }


export default function Home() {
  const session = useSession()
  return <div className="flex flex-col space-y-32">
    {/* <SessionProvider> */}
      
      <button onClick={() => signIn()}>signin</button>
      <button onClick={() => signOut()}>signout</button>
      {JSON.stringify(session)}
      {/* </SessionProvider> */}
  </div>
}