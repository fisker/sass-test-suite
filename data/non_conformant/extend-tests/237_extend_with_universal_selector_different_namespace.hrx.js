export default [
  {
    name: 'input.scss',
    data: '%-a ns|*.foo {a: b}\na {@extend .foo}\n-a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a ns|*.foo {\n  a: b;\n}\n',
  },
]
