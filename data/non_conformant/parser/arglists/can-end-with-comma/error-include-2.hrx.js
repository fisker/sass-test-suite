export default [
  {
    name: 'input.scss',
    data: '// double comma at end of arglist\n.error {\n  @include double-comma-error($a,$b,,);\n}\n',
  },
  {
    name: 'error',
    data: 'Error: expected ")".\n  ,\n3 |   @include double-comma-error($a,$b,,);\n  |                                     ^\n  \'\n  input.scss 3:37  root stylesheet\n',
  },
]
