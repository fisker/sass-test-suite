export default [
  {
    name: 'input.scss',
    data: 'foo.a {\n  width: 10px;\n}\n\nbar {\n  color: red;\n  @extend foo;\n}',
  },
  {
    name: 'output.css',
    data: 'foo.a, bar.a {\n  width: 10px;\n}\n\nbar {\n  color: red;\n}\n',
  },
]
