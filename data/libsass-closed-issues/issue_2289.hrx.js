export default [
  {
    name: 'input.scss',
    data: '.foo:baz:baz {\n  float: left;\n}\n\n.bar {\n  @extend .foo;\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo:baz:baz, .bar:baz:baz {\n  float: left;\n}\n',
  },
]
