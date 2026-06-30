export default [
  {
    name: 'input.scss',
    data: '.foo {\n.bar {a: b}\n.bip > .baz {@extend .bar}\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo .bar, .foo .bip > .baz {\n  a: b;\n}\n',
  },
]
