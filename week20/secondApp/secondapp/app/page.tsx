import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center  h-screen" >
      <div className="flex flex-col text-2xl space-y-6">
        {/* <h1>this is my home page i will create two pages = 1. signup and 2.sign in and routes after signup </h1> */}
        <h1>signup page  </h1>
        <LinkTag href="/signin" title="signin"/>
        <LinkTag href="/signup" title="signup"/>
      </div>
    </div>
    
  );
}

const LinkTag = ({href, title } : linkTagInterface) => {
  return (
      <Link href={href} className="bg-blue-600 py-1 rounded-md text-center">{title}</Link>
  )
}


interface linkTagInterface {
  href : string,
  title : string
}