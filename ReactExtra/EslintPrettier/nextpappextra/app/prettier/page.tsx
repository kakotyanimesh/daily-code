export default function Prettier() {
  return (
    <div className="flex flex-col justify-center items-start text-2xl space-y-4 m-32">
      <li>First install the prettier from npm or yarn</li>
      <li>npm install --save-dev --save-exact prettier</li>
      <li>
        Create a .prettierrc file in the root directory and make it {} empty
        like this as prettier is opioniated !!{" "}
      </li>
      <li>
        again we have to crate a file name .prettierignore and inside that file
        we can put folders that should be ignored while making the code prettier
      </li>
      <li>
        now run npx prettier . --write in the terminal to prettify your code
      </li>
    </div>
  );
}
