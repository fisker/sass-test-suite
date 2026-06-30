// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2429.hrx

export default [
  {
    name: 'input.scss',
    data: 'input[type=url] {\r\n  content: bar\r\n}',
  },
  {
    name: 'output.css',
    data: 'input[type=url] {\n  content: bar;\n}\n',
  },
]
