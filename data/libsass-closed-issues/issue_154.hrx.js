// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_154.hrx

export default [
  {
    name: 'input.scss',
    data: 'test {\r\n  filter:alpha(opacity=75);\r\n}',
  },
  {
    name: 'output.css',
    data: 'test {\n  filter: alpha(opacity=75);\n}\n',
  },
]
