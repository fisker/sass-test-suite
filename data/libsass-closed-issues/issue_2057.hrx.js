// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2057.hrx

export default [
  {
    name: 'input.scss',
    data: ':not(.thing) {\r\n    color: red;\r\n}\r\n:not(.bar) {\r\n    @extend .thing;\r\n    background: blue;\r\n}',
  },
  {
    name: 'output.css',
    data: ':not(.thing) {\n  color: red;\n}\n\n:not(.bar) {\n  background: blue;\n}\n',
  },
]
