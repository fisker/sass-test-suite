export default [
  {
    name: 'input.scss',
    data: '@flooblehoof {\n.foo {a: b}\n.bar {@extend .foo}\n}\n',
  },
  {
    name: 'output.css',
    data: '@flooblehoof {\n  .foo, .bar {\n    a: b;\n  }\n}\n',
  },
]
