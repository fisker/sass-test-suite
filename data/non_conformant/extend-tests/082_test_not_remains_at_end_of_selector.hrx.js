export default [
  {
    name: 'input.scss',
    data: '.foo:not(.bar) {a: b}\n.baz {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.foo:not(.bar), .baz:not(.bar) {\n  a: b;\n}\n',
  },
]
