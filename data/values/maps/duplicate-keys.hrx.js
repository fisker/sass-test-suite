export default [
  {
    name: 'input.scss',
    data: '$map: (\n  alpha: 1,\n  beta: 2,\n  gamma: 3,\n  delta: (\n    eta: 5,\n    eta: 6,\n  ),\n);\n',
  },
  {
    name: 'error',
    data: "Error: Duplicate key.\n  ,\n6 |     eta: 5,\n  |     === first key\n7 |     eta: 6,\n  |     ^^^ second key\n  '\n  input.scss 7:5  root stylesheet\n",
  },
]
