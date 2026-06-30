export default [
  {
    name: 'input.scss',
    data: 'a {\nb {a: b}\nc {@extend b}\n}\nd {@extend a}\n',
  },
  {
    name: 'output.css',
    data: 'a b, d b, a c, d c {\n  a: b;\n}\n',
  },
]
