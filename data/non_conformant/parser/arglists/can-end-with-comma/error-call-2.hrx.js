// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/arglists/can-end-with-comma/error-call-2.hrx

export default [
  {
    name: 'input.scss',
    data: '// double comma at end of arglist\n.error {\n  a: double-comma-error($a,$b,,);\n}\n',
  },
  {
    name: 'error',
    data: 'Error: expected ")".\n  ,\n3 |   a: double-comma-error($a,$b,,);\n  |                               ^\n  \'\n  input.scss 3:31  root stylesheet\n',
  },
]
