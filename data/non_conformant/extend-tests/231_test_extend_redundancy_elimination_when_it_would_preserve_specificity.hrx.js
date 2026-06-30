export default [
  {
    name: 'input.scss',
    data: '.bar a {a: b}\na.foo {@extend a}\n',
  },
  {
    name: 'output.css',
    data: '.bar a {\n  a: b;\n}\n',
  },
]
