export default [
  {
    name: 'input.scss',
    data: '// double comma in middle of arglist\n.error {\n  @include double-comma-error($a,,$b);\n}\n',
  },
  {
    name: 'error',
    data: 'Error: expected ")".\n  ,\n3 |   @include double-comma-error($a,,$b);\n  |                                  ^\n  \'\n  input.scss 3:34  root stylesheet\n',
  },
]
