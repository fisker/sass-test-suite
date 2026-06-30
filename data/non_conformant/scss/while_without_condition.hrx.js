export default [
  {
    name: 'input.scss',
    data: '@while {\n\n}\n',
  },
  {
    name: 'error',
    data: "Error: Expected expression.\n  ,\n1 | @while {\n  |        ^\n  '\n  input.scss 1:8  root stylesheet\n",
  },
]
