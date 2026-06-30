// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1726.hrx

export default [
  {
    name: 'input.scss',
    data: 'item {\n    background: #{2px} 2px /*red*/;\n}\n',
  },
  {
    name: 'output.css',
    data: 'item {\n  background: 2px 2px;\n}\n',
  },
]
