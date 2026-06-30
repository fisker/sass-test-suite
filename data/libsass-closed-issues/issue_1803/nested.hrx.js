// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1803/nested.hrx

export default [
  {
    name: 'input.scss',
    data: 'a {\n  display: block\n\n  b {\n    c {\n      foo: bar;\n    }\n  }\n}\n',
  },
  {
    name: 'error',
    data: 'Error: expected ":".\n  ,\n5 |     c {\n  |       ^\n  \'\n  input.scss 5:7  root stylesheet\n',
  },
]
