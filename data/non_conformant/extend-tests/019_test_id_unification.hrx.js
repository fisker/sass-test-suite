export default [
  {
    name: 'input.scss',
    data: '%-a .foo#baz {a: b}\n#baz {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a #baz {\n  a: b;\n}\n',
  },
]
