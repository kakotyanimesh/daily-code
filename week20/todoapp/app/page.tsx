import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#67aced]">
      <h1>TODO APP </h1>
      <div className="flex justify-between gap-32">
        <Link className="bg-white p-2 rounded-md" href='/signup'>SignUp</Link>
        <Link className="bg-white p-2 rounded-md" href='/signin'>SignIn</Link>
      </div>
    </div>
  );
}
