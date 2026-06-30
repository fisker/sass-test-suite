// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-todo-issues/issue_1694/quoted-right-dbl-paren.hrx

export default [
  {
    name: 'input.scss',
    data: 'test {\n  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=20\\));\n}\n',
  },
  {
    name: 'output.css',
    data: 'test {\n  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=20\\));\n}\n',
  },
]
