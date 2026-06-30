export default [
  {
    name: 'input.scss',
    data: 'a.bar {a: b}\n.bar {c: d}\nb.foo {@extend .bar}\n',
  },
  {
    name: 'output.css',
    data: 'a.bar {\n  a: b;\n}\n\n.bar, b.foo {\n  c: d;\n}\n',
  },
]
