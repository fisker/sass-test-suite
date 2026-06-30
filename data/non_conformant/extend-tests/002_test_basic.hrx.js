export default [
  {
    name: 'input.scss',
    data: '.bar {@extend .foo}\n.foo {a: b}\n',
  },
  {
    name: 'output.css',
    data: '.foo, .bar {\n  a: b;\n}\n',
  },
]
