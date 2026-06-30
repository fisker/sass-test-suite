export default [
  {
    name: 'input.scss',
    data: '%-a .foo {a: b}\na {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a .foo, -a a {\n  a: b;\n}\n',
  },
]
