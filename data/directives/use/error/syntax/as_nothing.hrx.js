export default [
  {
    name: 'input.scss',
    data: '@use "foo" as;\n',
  },
  {
    name: 'error',
    data: 'Error: Expected identifier.\n  ,\n1 | @use "foo" as;\n  |              ^\n  \'\n  input.scss 1:14  root stylesheet\n',
  },
]
