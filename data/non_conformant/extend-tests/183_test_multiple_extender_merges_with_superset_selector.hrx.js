export default [
  {
    name: 'input.scss',
    data: '.foo {@extend .bar; @extend .baz}\na.bar.baz {a: b}\n',
  },
  {
    name: 'output.css',
    data: 'a.bar.baz, a.foo {\n  a: b;\n}\n',
  },
]
