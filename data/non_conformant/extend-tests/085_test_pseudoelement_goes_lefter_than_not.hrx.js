export default [
  {
    name: 'input.scss',
    data: '.foo::bar {a: b}\n.baz:not(.bang) {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.foo::bar, .baz:not(.bang)::bar {\n  a: b;\n}\n',
  },
]
