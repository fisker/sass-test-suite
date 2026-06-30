export default [
  {
    name: 'input.scss',
    data: '%-a |*.foo {a: b}\na {@extend .foo}\n-a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a |*.foo {\n  a: b;\n}\n',
  },
]
