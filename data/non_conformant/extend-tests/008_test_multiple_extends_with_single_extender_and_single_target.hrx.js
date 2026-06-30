export default [
  {
    name: 'input.scss',
    data: '.foo.bar {a: b}\n.baz {@extend .foo; @extend .bar}\n',
  },
  {
    name: 'output.css',
    data: '.foo.bar, .baz {\n  a: b;\n}\n',
  },
]
