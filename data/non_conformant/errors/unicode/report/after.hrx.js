// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/unicode/report/after.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo{;öüäöüäöü',
  },
  {
    name: 'error',
    data: 'Error: expected "{".\n  ,\n1 | foo{;öüäöüäöü\n  |              ^\n  \'\n  input.scss 1:14  root stylesheet\n',
  },
]
