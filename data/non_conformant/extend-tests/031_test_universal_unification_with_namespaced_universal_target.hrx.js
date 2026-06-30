export default [
  {
    name: 'input.scss',
    data: '%-a ns|*.foo {a: b}\n* {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a ns|*.foo {\n  a: b;\n}\n',
  },
]
