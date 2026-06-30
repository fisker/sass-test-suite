export default [
  {
    name: 'input.scss',
    data: 'a.bar {a: b}\nb.foo {@extend .bar !optional}\n',
  },
  {
    name: 'output.css',
    data: 'a.bar {\n  a: b;\n}\n',
  },
]
