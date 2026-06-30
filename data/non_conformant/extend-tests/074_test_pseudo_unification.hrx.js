export default [
  {
    name: 'input.scss',
    data: '%-a :foo.baz {a: b}\n:bar {@extend .baz} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a :foo.baz, -a :foo:bar {\n  a: b;\n}\n',
  },
]
