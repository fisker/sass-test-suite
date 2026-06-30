export default [
  {
    name: 'input.scss',
    data: '// incorectly terminated\n.error {\n  @include incorrectly-terminated($a,$b,;\n}\n',
  },
  {
    name: 'error',
    data: 'Error: expected ")".\n  ,\n3 |   @include incorrectly-terminated($a,$b,;\n  |                                         ^\n  \'\n  input.scss 3:41  root stylesheet\n',
  },
]
