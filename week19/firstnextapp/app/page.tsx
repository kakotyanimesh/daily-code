import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl">

      todo full stack <br />

      <Link href='/signIn' className="text-blue-900">signIn</Link>  <br />
      <Link href='/signup' className="text-pink-600">signUp</Link>
       </h1>
    </div>
  );
}
