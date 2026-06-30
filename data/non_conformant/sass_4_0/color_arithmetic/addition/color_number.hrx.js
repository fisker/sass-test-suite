export default [
  {
    name: 'input.scss',
    data: '$v: #abc + 1;\n',
  },
  {
    name: 'error',
    data: 'Error: Undefined operation "#abc + 1".\n  ,\n1 | $v: #abc + 1;\n  |     ^^^^^^^^\n  \'\n  input.scss 1:5  root stylesheet\n',
  },
]
