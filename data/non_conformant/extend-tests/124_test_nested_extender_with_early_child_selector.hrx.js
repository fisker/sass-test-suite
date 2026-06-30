export default [
  {
    name: 'input.scss',
    data: '.foo {\n.bip .bar {a: b}\n> .baz {@extend .bar}\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo .bip .bar, .foo .bip .foo > .baz {\n  a: b;\n}\n',
  },
]
