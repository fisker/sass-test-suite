// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/fn-varargs/multiple.hrx

export default [
  {
    name: 'input.scss',
    data: '@function test($param...,$rest...) {}',
  },
  {
    name: 'error',
    data: 'Error: expected ")".\n  ,\n1 | @function test($param...,$rest...) {}\n  |                          ^\n  \'\n  input.scss 1:26  root stylesheet\n',
  },
]
