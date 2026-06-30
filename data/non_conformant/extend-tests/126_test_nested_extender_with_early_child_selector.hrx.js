export default [
  {
    name: 'input.scss',
    data: '.foo + .bar {a: b}\n.bip > .baz {@extend .bar}\n',
  },
  {
    name: 'output.css',
    data: '.foo + .bar, .bip > .foo + .baz {\n  a: b;\n}\n',
  },
]
