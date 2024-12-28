import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser },
  rules : {
    // two spaces before indentation
    "indent" : ["error", 2],
    // put space before functions paren 
    "space-before-function-paren" : ["error", "always"],
    "space-in-paren" : ["error", "never"]
  }
},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];