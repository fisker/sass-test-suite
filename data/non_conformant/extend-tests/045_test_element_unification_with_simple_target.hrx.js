export default [
  {
    name: 'input.scss',
    data: '%-a .foo.bar {a: b}\n*|a {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a .foo.bar, -a *|a.bar {\n  a: b;\n}\n',
  },
]
