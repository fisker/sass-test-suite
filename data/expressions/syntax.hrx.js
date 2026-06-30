// https://github.com/sass/sass-spec/blob/HEAD/spec/expressions/syntax.hrx

export default [
  {
    name: 'error/single_dot/input.scss',
    data: 'a {a: .}\n',
  },
  {
    name: 'error/single_dot/error',
    data: "Error: Expected digit.\n  ,\n1 | a {a: .}\n  |        ^\n  '\n  input.scss 1:8  root stylesheet\n",
  },
]
