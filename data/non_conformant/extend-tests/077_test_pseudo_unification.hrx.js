export default [
  {
    name: 'input.scss',
    data: '%-a :foo.baz {a: b}\n:foo {@extend .baz} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a :foo {\n  a: b;\n}\n',
  },
]
