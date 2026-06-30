export default [
  {
    name: 'input.scss',
    data: '.foo {a: b; @extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: b;\n}\n',
  },
]
