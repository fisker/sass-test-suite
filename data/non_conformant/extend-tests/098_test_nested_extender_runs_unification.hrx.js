export default [
  {
    name: 'input.scss',
    data: '.foo.bar {a: b}\nfoo bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.foo.bar, foo bar.bar {\n  a: b;\n}\n',
  },
]
