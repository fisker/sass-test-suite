// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2177.hrx

export default [
  {
    name: 'input.sass',
    data: '.a\r\n  +\r\n    .c, .b\r\n      margin: 10px',
  },
  {
    name: 'output.css',
    data: '.a + .c, .a + .b {\n  margin: 10px;\n}\n',
  },
]
