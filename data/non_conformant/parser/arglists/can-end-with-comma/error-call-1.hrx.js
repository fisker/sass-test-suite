// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/arglists/can-end-with-comma/error-call-1.hrx

export default [
  {
    name: 'input.scss',
    data: '// double comma in middle of arglist\n.error {\n  e: double-comma-error($a,,$b);\n}\n',
  },
  {
    name: 'error',
    data: 'Error: expected ")".\n  ,\n3 |   e: double-comma-error($a,,$b);\n  |                            ^\n  \'\n  input.scss 3:28  root stylesheet\n',
  },
]
