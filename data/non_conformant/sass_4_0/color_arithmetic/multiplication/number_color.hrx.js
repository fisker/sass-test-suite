export default [
  {
    name: 'input.scss',
    data: '$v: 1 * #123;\n',
  },
  {
    name: 'error',
    data: 'Error: Undefined operation "1 * #123".\n  ,\n1 | $v: 1 * #123;\n  |     ^^^^^^^^\n  \'\n  input.scss 1:5  root stylesheet\n',
  },
]
