// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_67.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {bar: 70% - 40%}',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: 30%;\n}\n',
  },
]
