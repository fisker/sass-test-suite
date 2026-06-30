export default [
  {
    name: 'input.scss',
    data: '.foo {a: b}\n.bar {c: d; @extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.foo, .bar {\n  a: b;\n}\n\n.bar {\n  c: d;\n}\n',
  },
]
