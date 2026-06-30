export default [
  {
    name: 'input.scss',
    data: '%-a ns|*.foo {a: b}\n*|a {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a ns|*.foo, -a ns|a {\n  a: b;\n}\n',
  },
]
