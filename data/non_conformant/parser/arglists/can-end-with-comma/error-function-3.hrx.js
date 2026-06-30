export default [
  {
    name: 'input.scss',
    data: '// incorectly terminated\n@function missing-paren-error($a,$b, {\n}\n',
  },
  {
    name: 'error',
    data: 'Error: expected ")".\n  ,\n2 | @function missing-paren-error($a,$b, {\n  |                                      ^\n  \'\n  input.scss 2:38  root stylesheet\n',
  },
]
