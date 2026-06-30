export default [
  {
    name: 'input.scss',
    data: '%-a *|a.foo {a: b}\nns|* {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a *|a.foo, -a ns|a {\n  a: b;\n}\n',
  },
]
