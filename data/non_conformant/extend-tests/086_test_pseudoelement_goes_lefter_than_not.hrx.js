export default [
  {
    name: 'input.scss',
    data: '.foo:not(.bang) {a: b}\n.baz::bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.foo:not(.bang), .baz:not(.bang)::bar {\n  a: b;\n}\n',
  },
]
