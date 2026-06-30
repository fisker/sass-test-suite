// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1162.hrx

export default [
  {
    name: 'input.scss',
    data: 'div {\n  content: #{0/0} a;\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  content: 0/0 a;\n}\n',
  },
]
