export default [
  {
    name: 'input.scss',
    data: '.foo,\n.bar {\n  .baz & {\n    color: red;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.baz .foo,\n.baz .bar {\n  color: red;\n}\n',
  },
]
