export default [
  {
    name: 'input.scss',
    data: '.foo {a: b; @extend .bar}\n.bar {c: d; @extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.foo, .bar {\n  a: b;\n}\n\n.bar, .foo {\n  c: d;\n}\n',
  },
]
