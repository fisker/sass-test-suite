export default [
  {
    name: 'input.scss',
    data: '%-a [foo=bar].baz {a: b}\n[ns|foo=bar] {@extend .baz} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a [foo=bar].baz, -a [foo=bar][ns|foo=bar] {\n  a: b;\n}\n',
  },
]
