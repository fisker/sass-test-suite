export default [
  {
    name: 'input.scss',
    data: '// incorectly terminated\n.error {\n  a: incorrectly-terminated($a,$b,;\n}\n',
  },
  {
    name: 'error',
    data: 'Error: expected ")".\n  ,\n3 |   a: incorrectly-terminated($a,$b,;\n  |                                   ^\n  \'\n  input.scss 3:35  root stylesheet\n',
  },
]
