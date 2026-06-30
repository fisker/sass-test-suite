// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1812.hrx

export default [
  {
    name: 'input.scss',
    data: '@svg-load test url(foo.svg) {\r\n  fill: red;\r\n}\r\n\r\n.foo {\r\n  background: svg-inline(test);\r\n}',
  },
  {
    name: 'output.css',
    data: '@svg-load test url(foo.svg) {\n  fill: red;\n}\n.foo {\n  background: svg-inline(test);\n}\n',
  },
]
