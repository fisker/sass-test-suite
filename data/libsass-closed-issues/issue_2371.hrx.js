// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2371.hrx

export default [
  {
    name: 'input.scss',
    data: '#{a==b}\n',
  },
  {
    name: 'error',
    data: 'Error: expected "{".\n  ,\n1 | #{a==b}\n  |        ^\n  \'\n  input.scss 1:8  root stylesheet\n',
  },
]
