export default [
  {
    name: 'input.scss',
    data: 'a.foo:bar {a: b}\n.baz {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: 'a.foo:bar, a.baz:bar {\n  a: b;\n}\n',
  },
]
