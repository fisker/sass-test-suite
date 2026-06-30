// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1825.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  &-- {\n    &baz {\n      color: red;\n    } \n  } \n} ',
  },
  {
    name: 'output.css',
    data: 'foo--baz {\n  color: red;\n}\n',
  },
]
