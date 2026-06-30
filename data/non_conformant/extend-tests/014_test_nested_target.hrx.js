export default [
  {
    name: 'input.scss',
    data: '.foo .bar {a: b}\n.baz {@extend .bar}\n',
  },
  {
    name: 'output.css',
    data: '.foo .bar, .foo .baz {\n  a: b;\n}\n',
  },
]
