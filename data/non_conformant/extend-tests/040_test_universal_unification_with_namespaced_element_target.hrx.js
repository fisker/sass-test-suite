export default [
  {
    name: 'input.scss',
    data: '%-a ns|a.foo {a: b}\n* {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a ns|a.foo {\n  a: b;\n}\n',
  },
]
