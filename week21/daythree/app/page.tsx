import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col space-y-11">
      <h1>we are going to do routes in next js , basically the folders that we can make with () and [....name] and [[...name]] </h1>
      <Link href='/api/auth/signin'>signin</Link>
      <Link href='/signup'>signup</Link>
    </div>
  );
}
