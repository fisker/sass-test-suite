export default [
  {
    name: 'input.scss',
    data: '// double comma at end of arglist\n@function double-comma-error($a,$b,,) {\n}\n',
  },
  {
    name: 'error',
    data: 'Error: expected ")".\n  ,\n2 | @function double-comma-error($a,$b,,) {\n  |                                    ^\n  \'\n  input.scss 2:36  root stylesheet\n',
  },
]
