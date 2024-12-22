
import Link from "next/link";

export default function Home() {
  return (
    <div className="text=4xl flex  flex-col justify-center items-center h-screen">
      pages with (this bracket) and [this bracket]

      <Link href='/signup'>signup</Link>
      <Link href='/signin'>signin</Link>
    </div> 
  );
}
