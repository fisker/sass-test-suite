// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/arglists/can-end-with-comma/error-mixin-2.hrx

export default [
  {
    name: 'input.scss',
    data: '// double comma at end of arglist\n@mixin double-comma-error($a,$b,,) {\n}\n',
  },
  {
    name: 'error',
    data: 'Error: expected ")".\n  ,\n2 | @mixin double-comma-error($a,$b,,) {\n  |                                 ^\n  \'\n  input.scss 2:33  root stylesheet\n',
  },
]
