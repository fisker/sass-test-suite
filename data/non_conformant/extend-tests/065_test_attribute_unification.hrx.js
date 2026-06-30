export default [
  {
    name: 'input.scss',
    data: '%-a [foo=bar].baz {a: b}\n[foo=baz] {@extend .baz} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a [foo=bar].baz, -a [foo=bar][foo=baz] {\n  a: b;\n}\n',
  },
]
