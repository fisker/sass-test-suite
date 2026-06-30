export default [
  {
    name: 'input.scss',
    data: '%-a ::foo(2n+1).baz {a: b}\n::foo(2n+1) {@extend .baz} -a {@extend %-a}\n',
  },
  {
    name: 'output.css',
    data: '-a ::foo(2n+1) {\n  a: b;\n}\n',
  },
]
