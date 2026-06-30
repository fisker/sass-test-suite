export default [
  {
    name: 'input.scss',
    data: 'foo#{1 + 2} baz {a: b}\n',
  },
  {
    name: 'output.css',
    data: 'foo3 baz {\n  a: b;\n}\n',
  },
]
