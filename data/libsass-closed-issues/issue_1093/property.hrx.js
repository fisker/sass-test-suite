export default [
  {
    name: 'input.scss',
    data: 'foo {\n  bar: #{};\n}\n',
  },
  {
    name: 'error',
    data: "Error: Expected expression.\n  ,\n2 |   bar: #{};\n  |        ^^\n  '\n  input.scss 2:8  root stylesheet\n",
  },
]
