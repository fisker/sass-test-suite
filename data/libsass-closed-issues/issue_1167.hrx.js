// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1167.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {\n  b: 3s + 101ms;\n}',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: 3.101s;\n}\n',
  },
]
