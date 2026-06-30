export default [
  {
    name: 'input.scss',
    data: 'ns|*.foo.bar {a: b}\na.baz {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: 'ns|*.foo.bar {\n  a: b;\n}\n',
  },
]
