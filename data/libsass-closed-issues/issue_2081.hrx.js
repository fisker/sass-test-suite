// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2081.hrx

export default [
  {
    name: 'input.scss',
    data: '$foo: #{bar();};\n',
  },
  {
    name: 'error',
    data: 'Error: expected "}".\n  ,\n1 | $foo: #{bar();};\n  |              ^\n  \'\n  input.scss 1:14  root stylesheet\n',
  },
]
