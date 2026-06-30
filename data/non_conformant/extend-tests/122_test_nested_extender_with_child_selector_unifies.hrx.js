export default [
  {
    name: 'input.scss',
    data: '.foo {\n.bar {a: b}\n> .baz {@extend .bar}\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo .bar, .foo > .baz {\n  a: b;\n}\n',
  },
]
