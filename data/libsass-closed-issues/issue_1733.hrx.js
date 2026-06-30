// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1733.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  a: #ff6600;\n  b: #ff6600\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: #ff6600;\n  b: #ff6600;\n}\n',
  },
]
