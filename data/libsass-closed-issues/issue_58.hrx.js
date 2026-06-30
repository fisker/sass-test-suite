// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_58.hrx

export default [
  {
    name: 'input.scss',
    data: 'test {\r\n  background: url(/static_loc/img/beta.png);\r\n}',
  },
  {
    name: 'output.css',
    data: 'test {\n  background: url(/static_loc/img/beta.png);\n}\n',
  },
]
