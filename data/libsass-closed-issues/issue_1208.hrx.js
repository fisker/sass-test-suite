// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1208.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  &.bar, /* */\n  &.baz {\n    color: red;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo.bar, foo.baz {\n  color: red;\n}\n',
  },
]
