// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/fn-varargs/with-default.hrx

export default [
  {
    name: 'input.scss',
    data: '@function test($param...:"default") {}',
  },
  {
    name: 'error',
    data: 'Error: expected ")".\n  ,\n1 | @function test($param...:"default") {}\n  |                         ^\n  \'\n  input.scss 1:25  root stylesheet\n',
  },
]
