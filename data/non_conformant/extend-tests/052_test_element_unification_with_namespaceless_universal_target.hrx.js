export default [
  {
    name: 'input.scss',
    data: '%-a *|*.foo {a: b}\nns|a {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a *|*.foo, -a ns|a {\n  a: b;\n}\n',
  },
]
