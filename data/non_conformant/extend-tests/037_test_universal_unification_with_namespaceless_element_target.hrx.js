export default [
  {
    name: 'input.scss',
    data: '%-a *|a.foo {a: b}\n*|* {@extend .foo} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a *|a {\n  a: b;\n}\n',
  },
]
