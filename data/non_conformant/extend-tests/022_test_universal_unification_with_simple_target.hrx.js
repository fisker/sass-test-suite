export default [
  {
    name: 'input.scss',
    data: '%-a .foo.bar {a: b}\n* {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a .bar {\n  a: b;\n}\n',
  },
]
