export default [
  {
    name: 'input.scss',
    data: '%-a ns|a.foo {a: b}\nns|* {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a ns|a {\n  a: b;\n}\n',
  },
]
