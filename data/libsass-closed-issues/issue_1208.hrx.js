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
