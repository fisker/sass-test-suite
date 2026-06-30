export default [
  {
    name: 'input.scss',
    data: '%foo {bar {@media screen {a {b: c}}}}\n.baz {c: d}\n',
  },
  {
    name: 'output.css',
    data: '.baz {\n  c: d;\n}\n',
  },
]
