export default [
  {
    name: 'input.scss',
    data: 'test {\r\n  err: 2px - 2px*2px;\r\n}',
  },
  {
    name: 'error',
    data: "Error: 2px and calc(4px * 1px) have incompatible units.\n  ,\n2 |   err: 2px - 2px*2px;\r\n  |        ^^^^^^^^^^^^^\n  '\n  input.scss 2:8  root stylesheet\n",
  },
]
