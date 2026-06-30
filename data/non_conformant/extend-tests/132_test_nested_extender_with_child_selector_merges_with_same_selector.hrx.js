export default [
  {
    name: 'input.scss',
    data: '.foo > .bar .baz {a: b}\n.foo > .bar .bang {@extend .baz}\n',
  },
  {
    name: 'output.css',
    data: '.foo > .bar .baz, .foo > .bar .bang {\n  a: b;\n}\n',
  },
]
