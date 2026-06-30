export default [
  {
    name: 'input.scss',
    data: '// double comma in middle of arglist\n@mixin double-comma-error($a,,$b) {\n}\n',
  },
  {
    name: 'error',
    data: 'Error: expected ")".\n  ,\n2 | @mixin double-comma-error($a,,$b) {\n  |                              ^\n  \'\n  input.scss 2:30  root stylesheet\n',
  },
]
