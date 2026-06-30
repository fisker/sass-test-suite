export default [
  {
    name: 'input.scss',
    data: '// incorectly terminated\n@mixin missing-paren-error($a,$b, {\n}\n',
  },
  {
    name: 'error',
    data: 'Error: expected ")".\n  ,\n2 | @mixin missing-paren-error($a,$b, {\n  |                                   ^\n  \'\n  input.scss 2:35  root stylesheet\n',
  },
]
