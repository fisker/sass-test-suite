// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1904.hrx

export default [
  {
    name: 'input.scss',
    data: ".foo {\n  &--#{'bar'} {\n    color: red;\n  }\n}",
  },
  {
    name: 'output.css',
    data: '.foo--bar {\n  color: red;\n}\n',
  },
]
