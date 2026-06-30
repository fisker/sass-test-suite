export default [
  {
    name: 'empty/input.scss',
    data: '@use "sass:string";\na {b: string.to-lower-case("")}\n',
  },
  {
    name: 'empty/output.css',
    data: 'a {\n  b: "";\n}\n',
  },
  {
    name: 'alphabet/input.scss',
    data: '@use "sass:string";\na {b: string.to-lower-case("ABCDEFGHIJKLMNOPQRSTUVQXYZ")}\n',
  },
  {
    name: 'alphabet/output.css',
    data: 'a {\n  b: "abcdefghijklmnopqrstuvqxyz";\n}\n',
  },
  {
    name: 'number/input.scss',
    data: '@use "sass:string";\na {b: string.to-lower-case("1234567890")}\n',
  },
  {
    name: 'number/output.css',
    data: 'a {\n  b: "1234567890";\n}\n',
  },
  {
    name: 'non_ascii/input.scss',
    data: '@use "sass:string";\n// Only ASCII characters have their case changed.\na {b: string.to-lower-case("ÄÇÐØÞ")}\n',
  },
  {
    name: 'non_ascii/output.css',
    data: '@charset "UTF-8";\na {\n  b: "ÄÇÐØÞ";\n}\n',
  },
  {
    name: 'unquoted/input.scss',
    data: '@use "sass:string";\na {b: string.to-lower-case(aBcDeF)}\n',
  },
  {
    name: 'unquoted/output.css',
    data: 'a {\n  b: abcdef;\n}\n',
  },
  {
    name: 'named/input.scss',
    data: '@use "sass:string";\na {b: string.to-lower-case($string: abcDEF)}\n',
  },
  {
    name: 'named/output.css',
    data: 'a {\n  b: abcdef;\n}\n',
  },
  {
    name: 'error/type/input.scss',
    data: '@use "sass:string";\na {b: string.to-lower-case(1)}\n',
  },
  {
    name: 'error/type/error',
    data: "Error: $string: 1 is not a string.\n  ,\n2 | a {b: string.to-lower-case(1)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_few_args/input.scss',
    data: '@use "sass:string";\na {b: string.to-lower-case()}\n',
  },
  {
    name: 'error/too_few_args/error',
    data: "Error: Missing argument $string.\n  ,--> input.scss\n2 | a {b: string.to-lower-case()}\n  |       ^^^^^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:string\n1 | @function to-lower-case($string) {\n  |           ====================== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'error/too_many_args/input.scss',
    data: '@use "sass:string";\na {b: string.to-lower-case("", "")}\n\n',
  },
  {
    name: 'error/too_many_args/error',
    data: 'Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {b: string.to-lower-case("", "")}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n  \'\n  ,--> sass:string\n1 | @function to-lower-case($string) {\n  |           ====================== declaration\n  \'\n  input.scss 2:7  root stylesheet\n',
  },
]
