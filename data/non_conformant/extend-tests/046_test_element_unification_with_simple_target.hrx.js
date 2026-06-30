export default [
  {
    name: 'input.scss',
    data: '%-a .foo.bar {a: b}\nns|a {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a .foo.bar, -a ns|a.bar {\n  a: b;\n}\n',
  },
]
