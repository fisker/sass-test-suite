// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-todo-issues/issue_1694/quoted-right-paren.hrx

export default [
  {
    name: 'input.scss',
    data: 'test {\n  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=20\\);\n}\n',
  },
  {
    name: 'error',
    data: 'Error: expected ")".\n  ,\n2 |   filter: progid:DXImageTransform.Microsoft.Alpha(opacity=20\\);\n  |                                                               ^\n  \'\n  input.scss 2:63  root stylesheet\n',
  },
]
