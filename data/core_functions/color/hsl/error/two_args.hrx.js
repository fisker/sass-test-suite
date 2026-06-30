export default [
  {
    name: 'input.scss',
    data: 'a {\n  b: hsl(#123, 0.5);\n}\n',
  },
  {
    name: 'error',
    data: "Error: Missing argument $lightness.\n  ,\n2 |   b: hsl(#123, 0.5);\n  |      ^^^^^^^^^^^^^^\n  '\n  input.scss 2:6  root stylesheet\n",
  },
]
