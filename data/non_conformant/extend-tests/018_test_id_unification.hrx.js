export default [
  {
    name: 'input.scss',
    data: '%-a .foo.bar {a: b}\n#baz {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a .foo.bar, -a .bar#baz {\n  a: b;\n}\n',
  },
]
