export default [
  {
    name: 'input.scss',
    data: '%-a .baz:foo {a: b}\n:after {@extend .baz} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a .baz:foo, -a :foo:after {\n  a: b;\n}\n',
  },
]
