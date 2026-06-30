export default [
  {
    name: 'input.scss',
    data: '.foo::bar {a: b}\n.baz {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.foo::bar, .baz::bar {\n  a: b;\n}\n',
  },
]
