export default [
  {
    name: 'input.scss',
    data: 'a {a: b}\na.foo {@extend a}\n',
  },
  {
    name: 'output.css',
    data: 'a, a.foo {\n  a: b;\n}\n',
  },
]
