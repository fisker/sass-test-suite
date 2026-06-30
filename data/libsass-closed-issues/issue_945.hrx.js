export default [
  {
    name: 'input.scss',
    data: '.a {\n  b: c;\n  d:\n}\n',
  },
  {
    name: 'error',
    data: "Error: Expected expression.\n  ,\n3 |   d:\n  |     ^\n  '\n  input.scss 3:5  root stylesheet\n",
  },
]
