export default [
  {
    name: 'input.scss',
    data: '.foo .bar {a: b}\n.baz {@extend .foo}\n.bang {@extend .bar}\n',
  },
  {
    name: 'output.css',
    data: '.foo .bar, .foo .bang, .baz .bar, .baz .bang {\n  a: b;\n}\n',
  },
]
