// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2031/wrapped-not.hrx

export default [
  {
    name: 'input.scss',
    data: ':not(.asd, .qwe) {\r\n  content: test;\r\n}',
  },
  {
    name: 'output.css',
    data: ':not(.asd, .qwe) {\n  content: test;\n}\n',
  },
]
