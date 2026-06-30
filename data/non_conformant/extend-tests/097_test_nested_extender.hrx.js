export default [
  {
    name: 'input.scss',
    data: '.foo {a: b}\nfoo bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.foo, foo bar {\n  a: b;\n}\n',
  },
]
