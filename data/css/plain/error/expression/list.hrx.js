export default [
  {
    name: 'empty/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'empty/plain.css',
    data: 'a {\n  x: ();\n}\n',
  },
  {
    name: 'empty/error',
    data: "Error: Expected expression.\n  ,\n2 |   x: ();\n  |       ^\n  '\n  plain.css 2:7   @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'empty_comma/input.scss',
    data: "@use 'plain'",
  },
  {
    name: 'empty_comma/plain.css',
    data: 'a {\n  x: (,);\n}\n',
  },
  {
    name: 'empty_comma/error',
    data: "Error: Expected expression.\n  ,\n2 |   x: (,);\n  |       ^\n  '\n  plain.css 2:7   @use\n  input.scss 1:1  root stylesheet\n",
  },
]
