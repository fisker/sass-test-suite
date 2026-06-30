// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2175.hrx

export default [
  {
    name: 'input.scss',
    data: 'a:nth-child() {\n  color: yellowgreen;\n}\n',
  },
  {
    name: 'error',
    data: 'Error: Expected "n".\n  ,\n1 | a:nth-child() {\n  |             ^\n  \'\n  input.scss 1:13  root stylesheet\n',
  },
]
