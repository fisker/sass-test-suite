// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/arglists/can-end-with-comma/error-call-3.hrx

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
