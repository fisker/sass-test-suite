export default [
  {
    name: 'input.scss',
    data: 'a {b: calc(1unknown + 1)}\n',
  },
  {
    name: 'error',
    data: "Error: 1unknown and 1 are incompatible.\n  ,\n1 | a {b: calc(1unknown + 1)}\n  |            ^^^^^^^^^^^^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
]
