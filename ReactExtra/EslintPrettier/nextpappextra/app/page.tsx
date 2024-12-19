import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center space-y-4 items-center text-3xl mt-32">
      <h1>KASH PRETTIER JAISA KUCH REAL LIFE MEIN BHI HOTA TOH USE KAR LETA</h1>
      <h1>
        in this project im going to learn about the prettier and eslint
        basically more focus on prettier{" "}
      </h1>
      <div className=" flex flex-col space-y-4">
        {
          linkarray.map((l, index) => (
            <LinkCompo key={index} title={l.title} href={l.href}/>
          ))
        }
      </div>
    </div>
  );
}


const linkarray = [
  {
    title : 'kirat docs',
    href : 'https://projects.100xdevs.com/tracks/eslint/ESLint--Prettier-and-Pre-commit-hooks-8'
  },
  {
    title : 'Prettier docs',
    href : 'https://prettier.io/docs/en/install'
  },
  {
    title : 'Prettier my docs',
    href : '/prettier'
  },
  {
    title : 'Precommmit hooks (husky)',
    href : '/husky'
  }
]

const LinkCompo = ({title, href} : LinkCompoInterface) => {
  return (
    <Link href={href} className="bg-blue-600 p-1 rounded-md text-center px-2">{title}</Link>
  )
}

interface LinkCompoInterface {
  title : string,
  href : string
}