export default [
  {
    name: 'input.scss',
    data: 'a {b: calc(1px - 1s)}\n',
  },
  {
    name: 'error',
    data: "Error: 1px and 1s are incompatible.\n  ,\n1 | a {b: calc(1px - 1s)}\n  |            ^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
]
