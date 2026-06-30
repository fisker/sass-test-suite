export default [
  {
    name: 'input.scss',
    data: '@use "foo" as 1;\n',
  },
  {
    name: 'error',
    data: 'Error: Expected identifier.\n  ,\n1 | @use "foo" as 1;\n  |               ^\n  \'\n  input.scss 1:15  root stylesheet\n',
  },
]
