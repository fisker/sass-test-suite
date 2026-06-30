export default [
  {
    name: 'input.scss',
    data: 'a.foo {a: b}\n.foo {@extend a}\n',
  },
  {
    name: 'output.css',
    data: 'a.foo, .foo {\n  a: b;\n}\n',
  },
]
