export default [
  {
    name: 'input.scss',
    data: '%-a :not(.foo).baz {a: b}\n:not(.foo) {@extend .baz} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a :not(.foo) {\n  a: b;\n}\n',
  },
]
