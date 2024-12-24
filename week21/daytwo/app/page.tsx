import Link from "next/link";


export default function Home() {
  return (
    <div className="space-y-20 flex flex-col">
      hi next auth 
      <Link className="bg-blue-400" href='/signup'>same auth folder /signup </Link>
      <Link className="bg-blue-400" href='/signin'>same auth folder / signin</Link>
      <h1>blog routes that are fucking dynamic , use the square brackets [dynamic routes]</h1>
    </div>
  );
}
