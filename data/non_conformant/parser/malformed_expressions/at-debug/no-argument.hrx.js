export default [
  {
    name: 'input.scss',
    data: '@debug;\n',
  },
  {
    name: 'error',
    data: "Error: Expected expression.\n  ,\n1 | @debug;\n  |       ^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
]
