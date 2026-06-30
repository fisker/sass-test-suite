export default [
  {
    name: 'input.scss',
    data: '.foo .bar {a: b}\n.baz {@extend .foo; @extend .bar}\n',
  },
  {
    name: 'output.css',
    data: '.foo .bar, .foo .baz, .baz .bar, .baz .baz {\n  a: b;\n}\n',
  },
]
