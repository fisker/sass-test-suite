// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1484.hrx

export default [
  {
    name: 'input.scss',
    data: 'div {\n',
  },
  {
    name: 'error',
    data: 'Error: expected "}".\n  ,\n1 | div {\n  |      ^\n  \'\n  input.scss 1:6  root stylesheet\n',
  },
]
