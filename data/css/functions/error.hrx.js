// https://github.com/sass/sass-spec/blob/HEAD/spec/css/functions/error.hrx

export default [
  {
    name: 'single_equals/no_lhs/input.scss',
    data: 'a {b: c(=d)}\n',
  },
  {
    name: 'single_equals/no_lhs/error',
    data: 'Error: expected ")".\n  ,\n1 | a {b: c(=d)}\n  |         ^\n  \'\n  input.scss 1:9  root stylesheet\n',
  },
  {
    name: 'single_equals/no_rhs/input.scss',
    data: 'a {b: c(d=)}\n',
  },
  {
    name: 'single_equals/no_rhs/error',
    data: "Error: Expected expression.\n  ,\n1 | a {b: c(d=)}\n  |           ^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'single_equals/no_lhs_or_rhs/input.scss',
    data: 'a {b: c(=)}\n',
  },
  {
    name: 'single_equals/no_lhs_or_rhs/error',
    data: 'Error: expected ")".\n  ,\n1 | a {b: c(=)}\n  |         ^\n  \'\n  input.scss 1:9  root stylesheet\n',
  },
]
