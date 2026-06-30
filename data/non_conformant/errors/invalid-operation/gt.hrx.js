// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/invalid-operation/gt.hrx

export default [
  {
    name: 'input.scss',
    data: 'test {\r\n  err: 2px > red;\r\n}',
  },
  {
    name: 'error',
    data: 'Error: Undefined operation "2px > red".\n  ,\n2 |   err: 2px > red;\n  |        ^^^^^^^^^\n  \'\n  input.scss 2:8  root stylesheet\n',
  },
]
