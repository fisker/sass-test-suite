// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_201.hrx

export default [
  {
    name: 'input.scss',
    data: 'a, b, { color: red; }',
  },
  {
    name: 'output.css',
    data: 'a, b {\n  color: red;\n}\n',
  },
]
