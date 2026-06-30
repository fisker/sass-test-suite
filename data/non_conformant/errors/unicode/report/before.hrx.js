// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/unicode/report/before.hrx

export default [
  {
    name: 'input.scss',
    data: 'öüäöüäöü{a:c',
  },
  {
    name: 'error',
    data: 'Error: expected "}".\n  ,\n1 | öüäöüäöü{a:c\n  |             ^\n  \'\n  input.scss 1:13  root stylesheet\n',
  },
]
