export default [
  {
    name: 'input.scss',
    data: '.foo.bar {a: b}\n.baz.bang {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.foo.bar, .bar.baz.bang {\n  a: b;\n}\n',
  },
]
