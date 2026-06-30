// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2307.hrx

export default [
  {
    name: 'input.scss',
    data: '0//#{\n{\n',
  },
  {
    name: 'error',
    data: 'Error: expected "}".\n  ,\n2 | {\n  |  ^\n  \'\n  input.scss 2:2  root stylesheet\n',
  },
]
